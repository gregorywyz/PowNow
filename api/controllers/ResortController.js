/**
 * ResortController
 *
 * @description :: Server-side logic for managing resorts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var request = require('request');
var disableApi = true; // disabled for styling purposes

module.exports = {

  index: function(req,res){

    // TODO: geonear mongoDB resorts based on desired distance

    var findDist = 321869; // 200 miles in meters
    // ( miles / 3959) may convert miles to meters

    var findLat = parseInt(req.query.latitude);
    var findLong = parseInt(req.query.longitude);

    Resort.find({location: {
      $near: {lat: findLat, long: findLong}
      // ,$maxDistance: 30
    }}).limit(10)
    .then(function(resorts){
      console.log('CLOSEST RESORTS :::::',resorts.map(function(resort){return resort.name}));
      res.send({
        result: true,
        resorts: resorts
      });
    })

  },


  Show: function(req,res){

    var locals = {};

    // GET ski resort
    Resort.find({id:req.params.id}).then(function(resort){
      console.log("FEATURED RESORT :::::",resort[0].name);
      locals.result = true;
      locals.resort = resort;

if(disableApi){
  return res.send(locals);
}

      // EXTERNAL API CALL FOR MOUNTAIN WEATHER
      var mountainWeather = {
        url: 'http://api.worldweatheronline.com/free/v2/ski.ashx',
        qs: {
          key: process.env.WWO_KEY,
          q: resort[0].location.lat + ',' + resort[0].location.long,
          num_of_days: '1',
          format: 'json'
        }
      };
      request(mountainWeather, function(error, response, body){
        if (!error && response.statusCode == 200) {
          locals.mountainWeather = JSON.parse(body);
          res.send(locals);
        } else {
          console.log(error,response.statusCode,response.statusMessage)
        }
      });
    });
  },


  forecast: function(req,res) {

    var locals = {};

    // GET ski resort
    Resort.find({id:req.params.id}).then(function(resort){
      locals.result = true;
      locals.resort = resort;

if(disableApi){
  return res.send(locals);
}

      // EXTERNAL API CALL FOR STANDARD WEATHER
      var localWeather = {
        url: 'http://api.worldweatheronline.com/free/v2/weather.ashx',
        qs: {
          key: process.env.WWO_KEY,
          q: resort[0].location.lat + ',' + resort[0].location.long,
          num_of_days: '3',
          tp: '3',
          format: 'json'
        }
      };
      request(localWeather, function(error, response, body){
        if (!error && response.statusCode == 200) {
          locals.weatherForecast = JSON.parse(body);
          res.send(locals);
        };
      });
    });
  },


  radar: function(req,res) {

    var locals = {};

    // GET ski resort
    Resort.find({id:req.params.id}).then(function(resort){
      locals.result = true;
      locals.resort = resort;

      // EXTERNAL API CALL FOR WEATHER RADAR
      var radar = 'http://api.wunderground.com/api/' + process.env.WU_KEY + '/animatedradar/image.gif?centerlat=' + resort[0].location.lat + '&centerlon=' + resort[0].location.long + '&radius=30&width=450&height=450&rainsnow=1&newmaps=1&timelabel=1&timelabel.y=10&num=15&delay=50&reproj.automerc=1';

// NOTE: example from api docs
// "http://api.wunderground.com/api/9ab9196cdf6818a6/radar/image.gif?maxlat=47.709&maxlon=-69.263&minlat=31.596&minlon=-97.388&width=640&height=480&rainsnow=1&timelabel=1&timelabel.x=525&timelabel.y=41&reproj.automerc=1"

      // get local radar for ski area
      // then pipe reponse to url (../radar.gif)
      // front end then uses that to display gif
      request.get(radar).pipe(res);

    });
  },


  addComment: function(req, res) {

    if(req.session.user){
      Comment.create({
        body:req.body.body,
        resort:req.params.resortId,
        user:req.session.user.id,
        userName:req.body.userName
      }).then(function(data) {
        Resort.findOne({id:req.params.resortId})
        .populateAll()
        .then(function(resort){
          res.send(resort);
        });
      });
    } else {
      res.send(403,'You must log in to post comments.');
    };
  },


  editComment: function(req, res) {

    Comment.update({id:req.params.id},{body:req.body.body}).then(function(data) {
      Resort.findOne({id:req.params.resortId}).populateAll().then(function(resort){
        res.send(resort);
      });
    });
  }

};