"use strict";

var satelliteController = require("./controllers/satellitecontroller");
var constellationController = require("./controllers/constellationcontroller");
var middleware = require("./middleware");

module.exports = function (app) {

  // satellites
  app.get("/api/satellites", middleware.parseQueryString, satelliteController.findAllSatellites);

  // constellations
  app.get("/api/constellations", middleware.parseQueryString, constellationController.findAllConstellations);
  app.get("/api/constellations/:id", constellationController.findConstellationById);
};
