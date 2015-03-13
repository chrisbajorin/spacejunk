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
    //var startTime = moment().minute(41).toDate();

    var job = agenda.create("GET_NEW_OBSERVATIONS");
    job.unique({name: "GET_NEW_OBSERVATIONS"});
    job.schedule(now);
    //job.schedule(startTime);
    job.repeatEvery("6 hours");
    job.save();

    agenda.define("GET_NEW_OBSERVATIONS", function(job, done) {

        satelliteService.getNewObservations(done);
    });
}
//curl -c cookies.txt -b cookies.txt -k
// https://www.space-track.org/ajaxauth/login -d
// 'identity=christopher.bajorin@gmail.com&password=WelpSeeYaLater!&
// query=https://www.space-track.org/basicspacedata/query/class/boxscore'

//function getDecaying(agenda) {
//
//
//    var wednesday = moment.tz("23:27:00", "HH:mm:ss", "UTC").day(3).toDate();
//
//    var job = agenda.create("GET_DECAYING_OBSERVATIONS");
//    job.unique({name: "GET_DECAYING_OBSERVATIONS"});
//    job.schedule(wednesday);
//    job.repeatEvery("1 week");
//    job.save();
//
//    agenda.define("GET_DECAYING_OBSERVATIONS", function(job, done) {
//
//        satelliteService.getDecayingObservations(done);
//    });
//}
