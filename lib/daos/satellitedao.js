"use strict";

var mongoose = require("mongoose");

var Satellite = mongoose.model("Satellite");


exports.findAllSatellites = function (qm, next) {

    var query = qm.buildQuery(Satellite);
    query.exec(next);
};


exports.findSatelliteByNoradId = function (noradId, next) {

    Satellite.findOne({noradId: noradId}, next);
};


exports.createSatellite = function (satellite, next) {

    Satellite.create(satellite, next);
};


exports.update = function (satellite, next) {

    Satellite.update(
        {noradId: satellite.noradId},
        satellite,
        {upsert: false},
        next
    );
};
