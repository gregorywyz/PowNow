/**
 * ResortController
 *
 * @description :: Server-side logic for managing resorts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var request = require('request');

module.exports = {

  index: function(req,res){
    console.log("ResortController - Index ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    Resort.find().then(function(resorts){
      console.log("ALL RESORTS ::::: ", resorts.map(function(resort){return resort.name}));
      res.send({
        result: true,
        resorts: resorts
      });
    });

    // TODO: geonear mongoDB resorts based on current location

    // res.view('pages/index');
  },


  Show: function(req,res){
    console.log("ResortController - Show ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    var locals = {};

    // get resort from model
    Resort.find({id:req.params.id}).then(function(resort){
      console.log("FEATURED RESORT ::::: ",resort[0].name);
      locals.result = true;
      locals.resort = resort;


      var mountainWeather = {
        url: 'http://api.worldweatheronline.com/free/v2/ski.ashx',
        qs: {
          key: process.env.WWO_KEY,
          q: resort[0].lat + ',' + resort[0].long,
          num_of_days: '1',
          format: 'json'
        }
      };

      request(mountainWeather, function(error, response, body){
        if (!error && response.statusCode == 200) {
          locals.mountainWeather = JSON.parse(body);
          res.send(locals);
        };
      });
    });
  },


  forecast: function(req,res) {
    console.log("ResortController - Forecast ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    var locals = {};

    // get resort info from model
    Resort.find({id:req.params.id}).then(function(resort){
      console.log("FEATURED RESORT ::::: ",resort[0].name);
      locals.result = true;
      locals.resort = resort;

      // set up API request
      var localWeather = {
        url: 'http://api.worldweatheronline.com/free/v2/weather.ashx',
        qs: {
          key: process.env.WWO_KEY,
          q: resort[0].lat + ',' + resort[0].long,
          num_of_days: '3',
          tp: '3',
          format: 'json'
        }
      };

      // get local weather for ski area
      request(localWeather, function(error, response, body){
        if (!error && response.statusCode == 200) {
          locals.weatherForecast = JSON.parse(body);
          res.send(locals);
        };
      });
    });
  },


  radar: function(req,res) {
    console.log("ResortController - Radar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    var locals = {};

    // get resort info from model
    Resort.find({id:req.params.id}).then(function(resort){
      console.log("FEATURED RESORT ::::: ",resort[0].name);
      locals.result = true;
      locals.resort = resort;

      // set up API request
      var radar = 'http://api.wunderground.com/api/' + process.env.WU_KEY + '/animatedradar/image.gif?centerlat=' + resort[0].lat + '&centerlon=' + resort[0].long + '&radius=30&newmaps=1&timelabel=1&timelabel.y=10&num=15&delay=50';

      // get local radar for ski area
      // then pipe reponse to url (../radar.gif)
      // front end then uses that to display gif
      request.get(radar).pipe(res);

    });
  }

};