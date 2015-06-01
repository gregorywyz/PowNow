/**
 * ResortController
 *
 * @description :: Server-side logic for managing resorts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  // index: function(req,res){
  //   console.log("ResortController - Index ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

  //   Resort.find().then(function(resorts){
  //     console.log("~~~ resorts ~~~", resorts);
  //     res.send({
  //       result: true,
  //       resorts: resorts
  //     });
  //   })

    // res.view('pages/index');
  // },


  Show: function(req,res){
    console.log("ResortController - Show ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    var request = require('request')
    var locals = {};

    // get resort from model
    Resort.find({id:req.params.id}).then(function(resort){
      console.log("~~~ resort ~~~",resort[0].name);
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
          // console.log('Body ~~~~~~~~~~~~~~', body)
          locals.mountainWeather = JSON.parse(body);
          console.log('Mountain Locals ~~~~~~~~~~~~~~~~~~~~~~~~~~~~',locals)
          res.send(locals);
        }
      });



    })

    // res.view('pages/index');
  },

  forecast: function(req,res) {
    console.log("ResortController - Forecast ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    var request = require('request')
    var locals = {};

    Resort.find({id:req.params.id}).then(function(resort){
      console.log("~~~ resort ~~~",resort[0].name);
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

      // var myUrlFull = 'http://api.worldweatheronline.com/free/v2/weather.ashx?key=' + process.env.WWO_KEY + '&q=' + resort[0].lat + ',' + resort[0].long + '&num_of_days=3&tp=3&format=json';

      // get local weather for ski area
      request(localWeather, function(error, response, body){
        if (!error && response.statusCode == 200) {
          // console.log('Body ~~~~~~~~~~~~~~', body)
          locals.weatherForecast = JSON.parse(body);
          console.log('Forecast Locals ~~~~~~~~~~~~~~~~~~~~~~~~~~~~',locals)
          res.send(locals);
        }
      });

    })
  }

};



      // var options = {
      //   headers: {
      //     url: 'http://api.worldweatheronline.com/free/v2/weather.ashx',
      //     params: {
      //     key: process.env.WWO_KEY,
      //     q: resort[0].lat + ',' + resort[0].long,
      //     num_of_days: '3',
      //     tp: '3',
      //     format: 'json'
      //   }
      // }
      // };


