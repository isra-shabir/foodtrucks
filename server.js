var express = require("express");
var path = require("path");
var bodyParser = require("body-parser"); 
var request = require('request');

var app = express();

app.use('/assets', express.static('assets'));

app.use(bodyParser.urlencoded({ extended: true })); 

/*
*  "/"  endpoint                                    
*  renders homepage html 
*/
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


/* 
* "/geodata" endpoint
* receives lat/long of user
* pings public data API
* sends arr of foodtrucks
* if found in the address
*/
app.post("/geodata", function(req, res) {

  var lat = req.body['lat'];
  var lng = req.body['lng'];

  var obj;

  //get all trucks within 1000m radius
  request('https://data.sfgov.org/resource/6a9r-agq8.json?'+
    '$where=within_circle(location,'+lat+','+lng+',1000)', 
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
          var arr = JSON.parse(body);
          if (arr.length === 0) {
            res.send("No Food Trucks in this Area!");
            return;
          }
          obj = arr.map(function(v){
            return {
              address: v.address,
              applicant: v.applicant,
              latitude: v.latitude,
              longitude: v.longitude,
              dayshours: v.dayshours,
              fooditems: v.fooditems
            }
          });
      } else {
        res.send("Bad Request");
      }
  res.send(obj);
  });
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


