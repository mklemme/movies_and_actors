var express = require("express"),
app = express(),
request = require('request'),
bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.send("home");
})

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
