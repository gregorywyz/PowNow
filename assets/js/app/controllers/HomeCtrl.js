PowApp.controller('HomeCtrl',['$scope','$rootScope','$location','$http',function($scope,$rootScope,$location,$http){

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
    $http.get('/api/resort').success(function(data){
      console.log('resorts:',data);
      $scope.resorts = data;
    });
  };

}]);