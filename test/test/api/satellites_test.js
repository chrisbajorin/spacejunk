'use strict';

//
// Satellites api route
//

var sat = {
    "_id" : "54353970d24b38e288ebbfb5",
    "name" : "FENGYUN 1C DEB",
    "norad_id" : "31084",
    "launch_date" : "Mon Jan 25 1999",
    "epoch_date" : 2456896.5602003355,
    "mean_motion_d" : 0.11014754,
    "mean_motion_dd" : 0,
    "b_star" : 0.15123,
    "inclination" : 99.4173,
    "raan" : 180.0991,
    "eccentricity" : 0.0052686,
    "perigee" : 143.3361,
    "mean_anomaly" : 217.1508,
    "mean_motion" : 15.49911809,
    "orbit_number" : 38415,
    "constellation" : "None",
    "const_member" : false,
    "decay_epoch" : 0,
    "will_decay" : false,
    "__v" : 0
}

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

    it("returns a single satellite when queried by norad_id", function(done) {
        var query = 'filters={"field":"norad_id","value":"' + sat.norad_id + '","queryType":"EQL"}'
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
        var query = 'filters={"field":"inclination","value":"90","queryType":"GTE"}'
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

    it.only("returns satellites with LTE query", function(done) {
        var query = 'filters={"field":"inclination","value":"90","queryType":"LTE"}'
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



});