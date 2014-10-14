before(function(done) {
    app.on('sj:appLoaded', function() {
        console.log('application loaded');
        done();
    });
});