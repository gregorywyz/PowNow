PowApp.controller('HomeCtrl',['$scope','$rootScope','$location',function($scope,$rootScope,$location){

  console.log("HomeCtrl initiated!");

  $scope.findResorts = function() {

    // html5 gets geolocation of user
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.currentLocation = position;
      console.log('currentLocation', $scope.currentLocation);
    });
    $location.path('/resort');
  };

}]);