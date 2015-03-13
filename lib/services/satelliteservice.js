"use strict";

var async = require("async");
var moment = require("moment-timezone");
var https = require("https");
var qs = require("querystring");

var satelliteDAO = require("../daos/satellitedao");
var MetaData = require("../daos/metadata"); // TODO remove this

var HOST = "space-track.org";

exports.findAllSatellites = function (filters, next) {

    satelliteDAO.findAllSatellites(filters, next);
};


//exports.createSatellites = function(satArray, next) {

    // iterate over satellites array inserting to db
//    async.eachSeries(satArray, function (sat, cb) {
//        SatelliteDAO.createSatellite(sat, cb);
//    },
//    function(err, res) {
//        if (err) {
//            console.log(err);
//        }
//        console.log(res);
//        next(null, res);
//    });
//};


//
// Call spacetrack API for recent data
//
exports.getNewObservations = function(next) {

    var query = "/basicspacedata/query/class/tle_latest/EPOCH/%3Enow-0.25/orderby/NORAD_CAT_ID%20asc/metadata/true";
    //var q2 = "/basicspacedata/query/class/tle_latest/orderby/ORDINAL%20asc/limit/5/metadata/true";
    async.waterfall([

        // TODO remove this and the first arg of the next function - testing metadata
        function(callback) {
            MetaData.remove({}, function(err) {
                if (err) { return callback(err); }
                return callback();
            });
        },

        function(callback) {

            var postdata = qs.stringify({
                identity: process.env.ST_USERNAME,//process.env.ST_USERNAME,
                password: process.env.ST_PASSWORD,
                query: "https://www.space-track.org" + query
            });
            var options = {
                host: HOST,
                port: 443,
                path: "/ajaxauth/login",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Content-Length": Buffer.byteLength(postdata, "utf8")
                }
            };

            var req = https.request(options, function(res) {

                var body = [];
                res.on("data", function(data) {
                    console.log(data.length);
                    body.push(data.toString("utf8"));
                });

                res.on("end", function() {
                    var data = JSON.parse(body.join(""));
                    return callback(null, data);
                });
            });

            req.on("error", function(err) {
                return callback(err);
            });
            req.write(postdata);
            req.end();
        },

        //
        // TODO remove this, it's for testing metadata
        //
        function (tlePublished, callback) {

            MetaData.create(tlePublished.request_metadata, function(err) {

                if (err) {
                    return callback(err);
                }
                callback(null, tlePublished);
            });
        },

        function(tlePublished, callback) {

            var satellites = tlePublished.data.map(spacetrackToSatObj);
            console.log(satellites.length);  // Number of TLE's downloaded

            async.eachLimit(satellites, 10, function(satellite, satCB) {

                satelliteDAO.findSatelliteByNoradId(satellite.noradId, function(error, sat) {

                    if (error) {
                        return satCB(error);
                    }

                    console.log(!!sat);

                    if (!sat) {

                        satelliteDAO.createSatellite(satellite, satCB);
                    } else if (sat && sat.epoch < satellite.epoch) {

                        satelliteDAO.update(satellite, satCB);
                    } else {

                        return satCB();
                    }
                }, function(error) {

                    if (error) {
                        return callback(error);
                    }
                    callback(error);
                });
            });
        }

    ], function(err) {

        if (err) {
            return next(err);
        }
        next();
    });

};


/*
Data lengths of each chunk:

8192
8192
6695

corresponding metadata

var x = {
    "request_metadata": {
        "Total"       : 28,
        "Limit"       : 500000,
        "LimitOffset" : 1,
        "ReturnedRows": 28,
        "RequestTime" : "0.0216",
        "DataSize"    : "9.2 KB"
    }
*/




//
// Call Spacetrack API to mark satellites as decaying
//
//exports.getDecayingObservations = function(next) {
//
//    var query =
//};



//
// PRIVATES
//


function spacetrackToSatObj(sat) {

    var doc = {
        name: sat.OBJECT_NAME,
        objectType: sat.OBJECT_TYPE,
        noradId: sat.NORAD_CAT_ID,
        epochDate: moment(sat.EPOCH).toDate(),
        epochMicro: parseFloat(sat.EPOCH_MICROSECONDS),
        meanMotion: parseFloat(sat.MEAN_MOTION),
        meanMotionDot: parseFloat(sat.MEAN_MOTION_DOT),
        meanMotionDD: parseFloat(sat.MEAN_MOTION_DDOT),
        eccentricity: parseFloat(sat.ECCENTRICITY),
        inclination: parseFloat(sat.INCLINATION),
        raan: parseFloat(sat.RA_OF_ASC_NODE),
        perigee: parseFloat(sat.ARG_OF_PERICENTER),
        meanAnomaly: parseFloat(sat.MEAN_ANOMALY),
        revolutions: parseFloat(sat.REV_AT_EPOCH),
        bStar: parseFloat(sat.BSTAR)
    };
    var launchDate = sat.OBJECT_ID.substr(0,8);
    doc.launchDate = moment(launchDate).format("YYYY-MM-DD");

    return doc;
}
