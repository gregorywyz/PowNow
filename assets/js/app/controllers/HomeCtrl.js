PowApp.controller('HomeCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

  $scope.currentLocation = false;

  // get GPS location on home page load
  navigator.geolocation.getCurrentPosition(function(position) {
    $scope.$evalAsync(function(){
      $scope.currentLocation = position.coords;
    });
  });

}]);