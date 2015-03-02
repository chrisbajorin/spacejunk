"use strict";

var mongoose = require("mongoose");

var Constellation = mongoose.model("Constellation");


exports.findAllConstellations = function(qm, next) {

    var query = qm.buildQuery(Constellation);
    query.exec(next);
};


exports.findConstellationById = function(constId, next) {

    Constellation.findById(constId, next);
};

