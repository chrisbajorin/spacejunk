var express = require("express"),
    app = express(),
    router = express.Router(),
    fs = require("fs");

var satdata = fs.readFileSync("./public/satellites.json", "utf8");

var server = app.listen(3000, function() {
  console.log("listening on port %d", server.address().port)
})

app.use(express.static(__dirname + '/public'));

app.get("/satdata", function(req,res){
  res.json(JSON.parse(satdata))
})
