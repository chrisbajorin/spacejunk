"use strict";

var mongoose = require("mongoose");
var Constellation = mongoose.model("Constellation");
var queryFilter;


exports.findAllConstellations(qm, next) {

    var query = Constellation.find();
    // buildQuery(query, qm);
    query.exec(next);
}


exports.findConstellationById(constId, next) {

    Constellation.findById(constId, next);
}
