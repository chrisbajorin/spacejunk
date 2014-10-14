'use strict';

var satelliteService = require('../services/satelliteservice');


exports.findAllSatellites = function (req, res) {

    var filters = req.query.filters || [];

    satelliteService.findAllSatellites(filters, setupResponseCallback(res));
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