//"use strict";
//
//
//var mongoose = require("mongoose");
//
//var Satellite = require("./../models/satellite");
//var parseCSV = require("./../util/satparser").parseCSV;
//var fs = require("fs");
//var data = fs.readFileSync("./../data/data.csv", "utf8");
//
//
//var db = mongoose.connect("mongodb://localhost/sj-local");
//
//db.connection.once("connected", function () {
//
//    var satArray = parseCSV(data);
//    //    console.log(Satellite);
//    satArray.forEach(function (sat) {
//        console.log(sat);
//        Satellite.create(sat, function (err, res) {
//            if (err) {
//                console.log(err);
//            }
//            console.log(res);
//        });
//    });
//
//});
//
