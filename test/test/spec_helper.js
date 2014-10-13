before(function(done) {
    app.on('sj:appLoaded', function() {
        console.log('this is loaded');
        done();
    });
});