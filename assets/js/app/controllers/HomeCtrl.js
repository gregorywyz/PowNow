PowApp.controller('HomeCtrl',['$scope','$rootScope',function($scope,$rootScope){

  console.log("HomeCtrl initiated!");

  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log("location",position);
  // });

  $scope.findResorts = function() {
    alert('clicked button');
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.currentLocation = position;
      console.log('currentLocation', $scope.currentLocation);
    });
  };

}]);