'use strict';

var fs = require('fs');
var data = fs.readFileSync('../data/data.csv', 'utf8');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sj-local');
var satSchema = require('../models/satellite');
var Satellite = mongoose.model('Satellite', satSchema);

function parseCSV(data) {
  var satArray = splitSats(data);
  return createJSON(satArray);
}


// returns array of satellite 3-line strings
function splitSats(data) {
  return data.split(/\n(?=0)/g);
}


// creates array of json satellite objects
function createJSON(satArray) {
  var jsonArray = [];

  satArray.forEach(function(d) {
    var name, norad_id,launch_date, epoch_date, b_star,
    inclination, raan, MST_RAAN, eccentricity, perigee,
    mean_anomaly, mean_motion, orbit_number, mean_motion_d,
    mean_motion_dd,
    sat = {};

    var threeLine = d.split(/\n/),
        line0 = threeLine[0],
        line1 = threeLine[1].split(/\s+/),
        line2 = threeLine[2].split(/\s+/);

    sat.name              = line0.substr(2);
    sat.norad_id          = line1[1].substr(0,5);
    sat.launch_date       = launchDate(line1[2], 0);
    sat.epoch_date        = epochDate(line1[3]);
    sat.mean_motion_d     = firstDerivative(line1[4]);
    sat.mean_motion_dd    = secondDerivative(line1[5]);
    sat.b_star            = secondDerivative(line1[6]);
    sat.inclination       = Number(line2[2]);
    sat.raan              = Number(line2[3]);
    sat.eccentricity      = Number('0.' + line2[4]);
    sat.perigee           = Number(line2[5]);
    sat.mean_anomaly      = Number(line2[6]);
    sat.mean_motion       = Number(line2[7].substr(0,11));
    sat.orbit_number      = orbits(line2[7], line2[8]);
    jsonArray.push(sat);
  });
  return jsonArray;
}


// data processing helpers
function launchDate(string, option) {
  var year      = string.substr(0,2),
      day       = string.substr(2,3),
      fraction  = string.substr(5),
      millis    = fraction * 86400000,
      ms        = millis % 1000,
      sec       = Math.floor((millis / 1000) % 60),
      min       = Math.floor((millis / 1000 / 60) % 60),
      hour      = Math.floor((millis / 1000 / 60 / 60) % 24),
      date;

  if (year >= 57) {
    year = '19' + year;
  } else {
    year = '20' + year;
  }

  var yearStart = new Date(year, 0);          // initialize a date in `year-01-01`
  date = new Date(yearStart.setDate(day));    // add the number of days


  // used to differentiate between launch date as a string, epoch as a number
  if (typeof option === 'undefined') {
    date.setUTCHours(hour);
    date.setUTCMinutes(min);
    date.setUTCSeconds(sec);
    date.setUTCMilliseconds(ms);
    return date;
  } else {
    return date.toDateString();
  }
}

//
function epochDate(string) {
  var date = launchDate(string);
  return date.getTime()/86400000 + 2440587.5;
}

function firstDerivative(string) {
  if (string[0] === '-') {
    return Number('-0.' + string.substr(2));
  } else {
    return Number('0.' + string.substr(1));
  }
}

function secondDerivative(string) {         // works the same for b_star
  if (string[0] === '-') {
    return Number('-0.' + string.substr(1,5) + 'e' + string.substr(-2));
  } else {
    return Number('0.' + string.substr(0,5) + 'e' + string.substr(-2));
  }
}

function orbits(string, string2){
  if (typeof string2 === 'undefined') {
    return Number(string.substr(-6,5));
  } else {
    return Number(string2.slice(0,-1));
  }
}

var satObjects = parseCSV(data);

satObjects.forEach(function (sat) {
  Satellite.create(sat) //, function (err, result) {
    // if (err)
    //   console.log(err);
    // console.log(result);
  // });
});


mongoose.disconnect();
