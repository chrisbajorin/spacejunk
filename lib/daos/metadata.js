"use strict";

// TODO remove this

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MetaDataSchema = new Schema({
    createdAt: Date,
    Total: Number,
    Limit: Number,
    LimitOffset: Number,
    ReturnedRows: Number,
    RequestTime: String,
    DataSize: String,
    speed: Number,
    elapsed: Number
});

MetaDataSchema.pre("save", function(next) {

    this.createdAt = new Date();
    next();
});

module.exports = mongoose.model("MetaData", MetaDataSchema);

