PowApp.controller('HomeCtrl',['$scope','$rootScope','$location',function($scope,$rootScope,$location){

  console.log("HomeCtrl initiated!");

  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log("location",position);
  // });

  $scope.findResorts = function() {
    // alert('clicked button');
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.currentLocation = position;
      console.log('currentLocation', $scope.currentLocation);
    });
    $location.path('/resort');
  };

}]);