"use strict";

var satelliteService = require("../services/satelliteservice");
var queryModel = require("../util/querymodel");


exports.findAllSatellites = function (req, res) {

    // TODO edit queryModel to parse req.query
    var qm = queryModel(req);

    satelliteService.findAllSatellites(qm, setupResponseCallback(res));
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
