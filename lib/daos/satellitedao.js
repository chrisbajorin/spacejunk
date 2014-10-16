"use strict";

var mongoose = require("mongoose");

var Satellite = mongoose.model("Satellite");

var queryParser = require('../util/queryparser');

exports.findAllSatellites = function (filter, next) {

    var query = Satellite.find();
    queryParser.buildQuery(query, filter);
    query.exec(next);
};
