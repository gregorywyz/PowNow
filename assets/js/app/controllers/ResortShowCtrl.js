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
      // console.log('datastuff:',data.weatherForecast.data)
      weatherForecast = data.weatherForecast.data;
      $scope.forecast = data.weatherForecast.data;
    });

  };

  $scope.getMultiDay = function() {
    alert('clicked')
    $scope.multiDay = weatherForecast;

  };



}]);