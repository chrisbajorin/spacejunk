var parser = require('../../../lib/util/parser');
var fs = require('fs');
var baseData = fs.readFileSync(__dirname + "/mock_base.csv", 'utf8');
var singleSatData = fs.readFileSync(__dirname + "/mock_single.csv", "utf8");
var updatedData = fs.readFileSync(__dirname + "/mock_update.csv", 'utf8');

var baseSatArray = parser.parseCSV(baseData);
var singleSat = parser.parseCSV(singleSatData);
var updateSatArray = parser.parseCSV(updatedData);

var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();
var eventCounter = 0;

ee.on('cb:countUp', function () {
    eventCounter += 1;
});

var Satellite = mongoose.model('Satellite');

describe('Satellite insertion', function () {

    beforeEach(function (done) {
        Satellite.create(baseSatArray, function(err, res) {
            if (err) { console.log(err); }
            console.log(res);
            done();
        });
    });

    afterEach(function(done) {
        Satellite.remove({}, function(err, res) {
            if (err) { console.log(err); }
            done();
        });
    });


    it('successfully runs beforeEach hook', function (done) {
        Satellite.find({}, function (err, result) {
            if (err)
                console.log(err);
            assert.equal(5, result.length);
            done();
        });
    });

    it('inserts new data', function (done) {
        Satellite.create(singleSat, function(err) {
            if (err) { console.log(err); }
            Satellite.find({}, function(err, res) {
                if (err) { console.log(err); }
                res.length.should.equal(6);
                done();
            });
        });
    });

});

