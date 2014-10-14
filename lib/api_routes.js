"use strict";

var satelliteController = require("./controllers/satellitecontroller");
var middleware = require("./middleware");

module.exports = function (app) {
  app.get("/api/satellites", middleware.parseQueryString, satelliteController.findAllSatellites);
};
