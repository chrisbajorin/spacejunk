'use strict';

//
// Satellites api route
//

var sat = require("./sat_mock");

describe("GET /api/satellites", function() {


    it("returns all satellites with no filters", function(done) {
        var req = server.get('/api/satellites');
        req.set('Accept', "application/json")
            .expect(200)
            .end(function (err, res) {
                should.not.exist(err);
                res.should.be.an('object');
                var body = res.body;
                body.should.be.an('array');
                body.length.should.equal(70);
                done();
        });
    });

    it("returns a single satellite when queried by noradId", function(done) {
        var query = 'filters=[{"field":"noradId","value":"' + sat.noradId + '","queryType":"EQL"}]';
        var req = server.get('/api/satellites?' + query);
        req.set('Accept', "application/json")
            .expect(200)
            .end(function (err, res) {
                if (err) { console.log(err); }
                should.not.exist(err);
                should.exist(res);
                res.should.be.an('object');

                var body = res.body;
                body.should.be.an('array');
                body.length.should.equal(1);
                body[0].name.should.equal("FENGYUN 1C DEB");

                done();
            });
    });

    it("returns satellites with GTE query", function(done) {
        var query = 'filters=[{"field":"inclination","value":"90","queryType":"GTE"}]';
        var req = server.get('/api/satellites?' + query);
        req.set("Accept", "application/json")
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.should.be.an("object");

                var body = res.body;
                body.should.be.an('array');
                body.length.should.equal(28);

                done();
            });
    });

    it("returns satellites with LTE query", function(done) {
        var query = 'filters=[{"field":"inclination","value":"90","queryType":"LTE"}]';
        var req = server.get('/api/satellites?' + query);
        req.set("Accept", "application/json")
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.should.be.an("object");

                var body = res.body;
                body.should.be.an('array');
                body.length.should.equal(42);

                done();
            });
    });

    it("returns satellites with a multi-part query", function(done) {
        var query = 'filters=[{"field":"inclination","value":"90","queryType":"LTE"},{"field":"raan","value":"90","queryType":"GTE"}]';
        var req = server.get('/api/satellites?' + query);
        req.set("Accept", "application/json")
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.should.be.an("object");

                var body = res.body;
                body.should.be.an('array');
                body.length.should.equal(30);

                done();
            });
    });


});