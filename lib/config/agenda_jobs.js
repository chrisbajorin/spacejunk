"use strict";

// Services
var satelliteService = require("../services/satelliteservice");

// Utils
var moment = require("moment-timezone");


//
// Load all agenda jobs
//
exports.loadJobs = function(agenda) {

    // Get any new TLEs from Space-track.org
    getNewObservations(agenda);
};


//
// Privates
//
function getNewObservations(agenda) {

    var now = moment().format("HH:mm");

    //var today = moment().format("YYYY-MM-DD");
    //var startTime = moment.tz(today + "T22:37:00", "UTC").format("HH:mm");

    var job = agenda.create("GET_NEW_OBSERVATIONS");
    job.unique({name: "GET_NEW_OBSERVATIONS"});
    job.schedule(now);
    //job.schedule(startTime);
    job.repeatEvery("1 day");
    job.save();

    agenda.define("GET_NEW_OBSERVATIONS", function(job, done) {

        satelliteService.getNewObservations(done);
    });
}
