"use strict";

var queryModel = require("../util/querymodel");

var constellationService = require("../services/constellationservice");

exports.findAllConstellations = function (req, res) {

    var qm = queryModel(req.query);

    constellationService.findAllConstellations(qm, setupResponseCallback(res));
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
