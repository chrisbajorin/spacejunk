"use strict";

var mongoose = require("mongoose");

var Satellite = mongoose.model("Satellite");

exports.findAllSatellites = function (filters, next) {

    var query = Satellite.find();

    query.exec(next);
};
