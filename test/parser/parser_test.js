var parser = require('../../lib/util/parser.js');
var mongoose = require('mongoose');
var Satellite = require('Satellite');

// abstract to spec_helper
var config = require('../../lib/config/config');
var path = require('path');
var fs = require('fs');
var app = require('../../server');


describe('Satellite insertion', function () {
  // before(function (done) {
  //   // mongoose.connect(config.mongo.uri, config.mongo.options);
  //   done();
  // });

  // after(function (done) {
  //   // mongoose.disconnect();
  //   done();
  // });

  it('connects to the database', function (done) {
    Satellite.find({}, function (err, result) {
      if (err)
        console.log(err);
      console.log(result);
      done();
    });
  });

});
