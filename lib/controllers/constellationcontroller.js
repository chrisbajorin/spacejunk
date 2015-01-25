"use strict";

var constellationService = require("../services/constellationcontroller");

exports.findAllConstellations = function (req, res) {

    var filters = req.query.filter || [];

    constellationService.findAllConstellations(filters, setupResponseCallback(res));
};

exports.findConstellationById = function (req, res) {

    var constId = req.params.id;

    constellationService.findConstellationById(constId, setupResponseCallback(res));
};

function setupResponseCallback(res) {

    return function(error, returnValue) {

        if ( error ) {
            console.error(error);
            return res.status(500).json(error);
        }
        res.status(200).json(returnValue);
    };
}
