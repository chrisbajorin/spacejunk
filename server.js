var express = require("express"),
    app = express(),
    fs = require("fs");

var satdata = fs.readFileSync("./data/satellites.json", "utf8");

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log("listening on port %d", server.address().port)
})

app.use(express.static(__dirname + '/public'));

app.get("/satdata", function(req,res){
  res.json(JSON.parse(satdata))
})
