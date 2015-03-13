"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var SatelliteSchema = new Schema({
    name               : String,
    objectType         : String,
    noradId            : {
        type: String,
        index: true
    },
    epochDate          : Date,
    epochMicro         : Number,
    launchDate         : String,
    meanMotionDot      : Number,
    meanMotionDD       : Number,
    bStar              : Number,
    inclination        : Number,
    raan               : Number,
    eccentricity       : Number,
    perigee            : Number,
    meanAnomaly        : Number,
    meanMotion         : Number,
    revolutions        : Number,
    willDecay          : {
        type   : Boolean,
        default: false
    },
    decayEpoch         : Number,
    constellationMember: {
        type   : Boolean,
        default: false
    },
    constellation      : String
});

module.exports = mongoose.model("Satellite", SatelliteSchema);

