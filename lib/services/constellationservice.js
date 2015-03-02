"use strict";

var constellationDAO = require("../daos/constellationdao");


//
// Find by filters
//
exports.findAllConstellations = function(qm, next) {

    constellationDAO.findAllConstellations(qm, next);
};


//
//  Find by Id
//
exports.findConstellationById = function(constId, next) {

    constellationDAO.findConstellationById(constId, next);
};
