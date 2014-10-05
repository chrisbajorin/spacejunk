'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app) {

  app.use(require('connect-livereload')());
  app.use(morgan('dev'));
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({extended: true}));

};
