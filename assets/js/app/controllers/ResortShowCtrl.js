PowApp.controller('ResortShowCtrl',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){

  console.log("ResortShowCtrl initiated!");

  // returns object of one ski resort
  $http.get('/api/resort/'+ $routeParams.id).success(function(data){
    console.log('resort:',data);
    $scope.resort = data;
  });

  // var req = {
  //   url: 'http://api.worldweatheronline.com/free/v2/weather.ashx',
  //   params: {
  //     key: process.env.WWO_KEY,
  //     // q: '47.6097,-122.3331',
  //     q: $scope.resort.lat + ',' + $scope.resort.long,
  //     num_of_days: '3',
  //     tp: '3',
  //     format: 'json'
  //   }
  // };
  // $http(req).success(function(data){
  //   console.log('data',data);
  //   $scope.currentWeather = data.data.current_condition;
  //   $scope.request = data.data.request;
  //   $scope.forcastWeather = data.data.weather;
  // });

  // var ski = {
  //   url: 'http://api.worldweatheronline.com/free/v2/ski.ashx',
  //   params: {
  //     key: process.env.WWO_KEY,
  //     // q: '47.6097,-122.3331',
  //     q: $scope.resort.lat + ',' + $scope.resort.long,
  //     num_of_days: '1',
  //     format: 'json'
  //   }
  // };
  // $http(ski).success(function(data){
  //   console.log('ski',data);
  //   $scope.ski = data.data.weather[0];
  // });

}]);