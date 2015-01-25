"use strict";


var constellationDAO = require("../daos/constellationdao");


//
// Find by filters
//
exports.findAllConstellations = function(filters, next) {

    var query;

    constellationDAO.findAllConstellations(qm, next);
};


//
//  Find by Id
//
exports.findConstellationById = function(constId, next) {

    constellationDAO.findConstellationById(constId, next);
};
