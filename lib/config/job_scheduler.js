"use strict";
//
// job_scheduler.js
//

var Agenda = require("agenda");
var config = require("./config");
var jobs = require("./agenda_jobs");

exports.initAgenda = function() {

    var agenda = new Agenda();

    agenda
        .database(config.mongo.uri)
        // length of time before a job times out
        .defaultLockLifetime(10000);

    jobs.loadJobs(agenda);

    agenda.purge(function(err, removed) {

        // Remove any agenda documents that have no corresponding definition
        console.log(removed + " undefined tasks have been removed");
    });

    agenda.start();

    agenda.on("start", function(job) {
        console.log("Job %s starting", job.attrs.name);
    });
};



