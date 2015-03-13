"use strict";

// TODO remove this

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MetaDataSchema = new Schema({
    Total: Number,
    Limit: Number,
    LimitOffset: Number,
    ReturnedRows: Number,
    RequestTime: String,
    DataSize: String
});

module.exports = mongoose.model("MetaData", MetaDataSchema);

