'use strict';

//
// Satellites api route
//


describe("GET /api/satellites", function() {

    before(function(done) {
        console.log("before: api/route");
        done();
    });

    after(function(done) {
        console.log("after: api/route");
        done();
    });

    it("runs second", function() {
        assert.equal(1,1);
    })

});