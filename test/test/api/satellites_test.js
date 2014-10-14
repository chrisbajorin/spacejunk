'use strict';

//
// Satellites api route
//


describe.only("GET /api/satellites", function() {


    it("returns all satellites", function(done) {
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


});