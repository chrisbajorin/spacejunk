"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SatelliteSchema = new Schema({
  name: String,
  noradId: String,
  launchDate: String,
  epochDate: Number,
  meanMotionDot: Number,
  meanMotionDD: Number,
  bStar: Number,
  inclination: Number,
  raan: Number,
  eccentricity: Number,
  perigee: Number,
  meanAnomaly: Number,
  meanMotion: Number,
  orbits: Number,
  willDecay : {
    type: Boolean,
    default: false
  },
  decayEpoch: {
    type:Number,
    default: 0
  },
  constellationMember: {
    type: Boolean,
    default: false
  },
  constellation: {
    type: String,
    default: "None"
  }
});

module.exports = mongoose.model("Satellite", SatelliteSchema);

