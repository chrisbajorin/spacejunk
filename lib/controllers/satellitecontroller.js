'use strict';

var mongoose = require('mongoose');
var satelliteService = require('../services/satelliteservice');
var Satellite = mongoose.model('Satellite');

exports.findAllSatellites = function(req, res, next) {
    Satellite.find({}, function(err, result) {
        console.log(result);
        res.send(result);
        next();
    });
};
