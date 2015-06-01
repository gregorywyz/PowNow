PowApp.controller('HomeCtrl',['$scope','$rootScope','$http','ResortService',function($scope,$rootScope,$http,ResortService){

  console.log("HomeCtrl initiated!");

  // html5 gets geolocation of user
  navigator.geolocation.getCurrentPosition(function(position) {
    $scope.currentLocation = position;
    console.log('currentLocation', $scope.currentLocation);
    console.log('currentLong', $scope.currentLocation.coords.longitude);
    console.log('currentLat', $scope.currentLocation.coords.latitude);
  });

  $scope.findResorts = function() {

    // returns array of all ski resorts
    // TODO: do geolocation here to return closest ski resorts
    $http.get('/api/resort').success(function(data){
      console.log('resorts:',data);
      $scope.resorts = data;
    });

    // // no need for service on 'get' | save for reference for API calls
    // ResortService.index(function(err,data){
    //   console.log('HomeCtrl RS data:',data);
    //   $scope.resorts = data;
    // });
  };

}]);