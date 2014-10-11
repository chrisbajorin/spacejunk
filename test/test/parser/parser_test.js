var fs = require('fs');
var path = require('path');




var Satellite = mongoose.model('Satellite');

describe('Satellite insertion', function () {

    beforeEach(function(done) {
        done();
    });



  it('connects to the database', function (done) {
    Satellite.find({}, function (err, result) {
      if (err)
        console.log(err);
      assert.equal(70, result.length);
      done();
    });
  });

});
