'use strict';

var SatelliteDAO = require('../daos/satellitedao');


exports.findAllSatellites = function (filters, next) {

    SatelliteDAO.findAllSatellites(filters, next);
};
