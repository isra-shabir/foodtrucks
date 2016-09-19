var express = require("express");
var path = require("path");
var bodyParser = require("body-parser"); 

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true })); 

/*
*  "/"  endpoint                                    
*  renders homepage html 
*/
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
  });


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

