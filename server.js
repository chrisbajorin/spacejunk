'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');


// default environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// App config
var config = require('./lib/config/config');

// db connection
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

app.use(function (req, res, next) {
  req.config = config;
  return next();
});

// grab models

var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/(.*)\.(js$)/.test(file)) {
    require(modelsPath + '/' + file);
  };
});

// express settings
require('./lib/config/express')(app);

// routes

// require('./lib/api_routes')(app);

require('./lib/app_routes')(app);

// db logging
if (app.settings.env === 'local') {
  mongoose.set('debug', true);
}

// startup
app.listen(config.port, function () {
  console.log('Express listening on port %d in %s mode', config.port, app.get('env'));
});

// expose app
exports = module.exports = app;
