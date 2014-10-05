'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SatelliteSchema = new Schema({
  name: String,
  norad_id: String,
  launch_date: String,
  epoch_date: Number,
  mean_motion_d: Number,
  mean_motion_dd: Number,
  b_star: Number,
  inclination: Number,
  raan: Number,
  eccentricity: Number,
  perigee: Number,
  mean_anomaly: Number,
  mean_motion: Number,
  orbit_number: Number,
  willDecay : {
    type: Boolean,
    default: false
  },
  decay_epoch: Number,
  const_member: {
    type: Boolean,
    default: false
  },
  constMember: {
    type: Boolean,
    default: false
  },
  constellation: {
    type: String,
    default: "None"
});

module.exports = mongoose.model('Satellite', SatelliteSchema);
