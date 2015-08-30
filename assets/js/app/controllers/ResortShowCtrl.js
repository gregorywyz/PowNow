PowApp.controller('ResortShowCtrl',['$scope','$rootScope','$http','$routeParams','UserService','ResortComment',function($scope,$rootScope,$http,$routeParams,UserService,ResortComment){

  $scope.UserService = UserService;
  console.log('UserService',UserService);

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

  var weatherForecast;

  // RETURNS MOUNTAIN WEATHER FROM BACKEND
  $http.get('/api/resort/' + $routeParams.id + '/show').success(function(data){
    $scope.resort = data.resort[0];
    $scope.mountainWeather = data.mountainWeather.data.weather[0];
  });

  // RETURNS STANDARD WEATHER FROM BACKEND
  $http.get('/api/resort/' + $routeParams.id + '/forecast').success(function(data){
    $scope.forecast = data.weatherForecast.data;
  });

  $scope.radarUrl = "";
  $scope.showRadar = false;
  $scope.radarLoaded = false;

  // set radar to be the url that the backend controller created from the API call
  // avoids having to make another call from frontend
  $scope.getRadar = function() {
    $scope.showRadar = !$scope.showRadar;
    if(!$scope.radarUrl){
      $scope.radarUrl = '/api/resort/' + $routeParams.id + '/radar.gif';
      // give time for gif to load before cancelling spinner
      window.setTimeout(function() {
        $scope.$evalAsync(function(){
          $scope.radarLoaded = true;
        });
      }, 3000);
    };
  };

}]);