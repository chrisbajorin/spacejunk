"use strict";

var SatelliteDAO = require("../daos/satellitedao");


exports.findAllSatellites = function (filters, next) {

    SatelliteDAO.findAllSatellites(filters, next);
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

    console.log("agenda is connected");
    next();
};
