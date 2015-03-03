"use strict";

var mongoose = require("mongoose");

var Satellite = mongoose.model("Satellite");


exports.findAllSatellites = function (qm, next) {

    var query = qm.buildQuery(Satellite);
    query.exec(next);
};

exports.createSatellite = function (satellite, next) {

    Satellite.create(satellite, next);
};
