PowApp.controller('ResortShowCtrl',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){

  console.log("ResortShowCtrl initiated!");

  var weatherForecast;

  // returns object of mountain weather data from backend controller
  $http.get('/api/resort/' + $routeParams.id + '/show').success(function(data){
    console.log('show:',data);
    $scope.resort = data.resort[0];
    // $scope.weather = data.weather.data;
    $scope.mountainWeather = data.mountainWeather.data.weather[0];
  });


  $scope.getForecast = function() {

    // returns object of weather forecast data from backend controller
    $http.get('/api/resort/' + $routeParams.id + '/forecast').success(function(data){
      console.log('forecast:',data);
      // weatherForecast = data.weatherForecast.data;
      $scope.forecast = data.weatherForecast.data;
    });
  };


  $scope.radarUrl="";
  $scope.showRadar=false;

  // set radar to be the url that the backend controller created from the API call
  $scope.getRadar = function() {
    $scope.showRadar = !$scope.showRadar;

    if(!$scope.radarUrl){
      $scope.radarUrl = '/api/resort/' + $routeParams.id + '/radar.gif'
    };
  };

}]);