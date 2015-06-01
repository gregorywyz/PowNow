/**
 * ResortController
 *
 * @description :: Server-side logic for managing resorts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req,res){
    console.log("ResortController - Index ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    Resort.find().then(function(resorts){
      console.log("~~~ resorts ~~~", resorts);
      res.send({
        result: true,
        resorts: resorts
      });
    })

    // res.view('pages/index');
  },

  Show: function(req,res){
    console.log("ResortController - Show ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    var locals = {};

    Resort.find({id:req.params.id}).then(function(resort){
      console.log("~~~ resort ~~~",resort[0].name);
      locals.result = true;
      locals.resort = resort;



      // console.log('locals',locals)
      res.send(locals);
    })

      // var http = require('http');
      // var options = {
      //   url: 'http://api.worldweatheronline.com/free/v2/weather.ashx',
      //   params: {
      //     key: process.env.WWO_KEY,
      //     q: '47.6097,-122.3331',
      //     // q: $scope.resort.lat + ',' + $scope.resort.long,
      //     num_of_days: '3',
      //     tp: '3',
      //     format: 'json'
      //   }
      // };

      // http.request(options, function(data){
      //   console.log("weather:",data)
      // }).end();




    // res.view('pages/index');
  }

};

