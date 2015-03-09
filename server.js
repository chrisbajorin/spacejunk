"use strict";

var express = require("express");
var path = require("path");
var fs = require("fs");
var mongoose = require("mongoose");

var modelsPath = path.join(__dirname, "lib/models");
fs.readdirSync(modelsPath).forEach(function (file) {
    if (/([a-z]+)\.(js$)/.test(file)) {
        require(modelsPath + "/" + file);
    }
});

// default environment
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// App config
var config = require("./lib/config/config");

// db connection
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

var app = express();

db.connection.once("connected", function () {
    console.log("connected to %s", config.mongo.uri);

    app.use(function (req, res, next) {
        req.config = config;
        return next();
    });

    // express settings
    require("./lib/config/express")(app);

    // Agenda jobs
    var scheduler = require("./lib/config/job_scheduler");
    scheduler.initAgenda();

    // routes
    require("./lib/api_routes")(app);
    require("./lib/app_routes")(app);

    // db logging
    if (app.settings.env === "local"/* || app.settings.env === "test"*/) {
        mongoose.set("debug", true);
    }

    // startup
    app.listen(config.port, function () {
        console.log("Express listening on port %d in %s mode", config.port, app.get("env"));
    });

    app.emit("sj:appLoaded");

});

// expose app
exports = module.exports = app;
