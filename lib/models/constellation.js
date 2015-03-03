"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ConstellationSchema = new Schema({
    name       : String,
    noradIds   : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Satellite"
        }
    ],
    description: String,
    wikiUrl    : String
});

module.exports = mongoose.model("Constellation", ConstellationSchema);
