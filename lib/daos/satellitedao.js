"use strict";

var mongoose = require("mongoose");

var Satellite = mongoose.model("Satellite");

var queryParser = require('../util/queryparser');

exports.findAllSatellites = function (filters, next) {

    var query = Satellite.find();
    queryParser.buildQuery(query, filters);
    query.exec(next);
};
