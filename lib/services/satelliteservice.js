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

//
// Call spacetrack API for recent data
//
exports.getNewObservations = function(next) {

    //var query = "/basicspacedata/query/class/tle_latest/EPOCH/%3Enow-0.25/orderby/NORAD_CAT_ID%20asc/metadata/true";
    var query = "/basicspacedata/query/class/tle_latest/favorites/Orbcomm/orderby/NORAD_CAT_ID/format/json/metadata/true";

    async.waterfall([

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

                console.log("got a response");

                var body = [];
                var start = Date.now();
                var lastCheck = start;
                var lastPause = 0;
                var speedLimit = 100;
                var totalSize = 0;
                var pauseTime,
                    chunkTime,
                    timePassed,
                    chunkSize,
                    neededTime,
                    adjustedPause;

                res.on("data", function(data) {

                    chunkSize = data.length;
                    chunkTime = Date.now();
                    timePassed = chunkTime - lastCheck;
                    lastCheck = chunkTime;
                    neededTime = chunkSize / speedLimit * 2;  // I have no idea why I need this 2
                    pauseTime = neededTime - timePassed;
                    adjustedPause = Math.floor((0.33 * lastPause) + (0.67 * pauseTime));

                    console.log(data.length);
                    res.pause();
                    setTimeout(resume, adjustedPause);
                    lastPause = adjustedPause;

                    body.push(data.toString("utf8"));
                    totalSize += data.length;
                });

                res.on("end", function() {

                    var done = Date.now();
                    var elapsed = (done - start) / 1000;
                    var kb = totalSize/1024;

                    var data = JSON.parse(body.join(""));
                    data.request_metadata.speed = kb / elapsed;
                    data.request_metadata.elapsed = elapsed;

                    return callback(null, data);
                });

                function resume() {
                    res.resume();
                }
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

            async.eachSeries(satellites, function(satellite, satCB) {

                satelliteDAO.findSatelliteByNoradId(satellite.noradId, function(error, sat) {

                    if (error) {
                        return satCB(error);
                    }

                    if (!sat) {

                        satelliteDAO.createSatellite(satellite, satCB);
                    } else if (sat && sat.epochDate < satellite.epochDate) {

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
    //doc.constellationMember = true;
    //doc.constellation = "Orbcomm";
    return doc;
}
