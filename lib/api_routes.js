'use strict';

var satelliteController = require('./controllers/satellitecontroller');

module.exports = function (app) {
  app.get('/api/satellites', middleware.parseQueryString, satelliteController.findAllSatellites)
}
