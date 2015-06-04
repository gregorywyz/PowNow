PowApp.controller('HomeCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

  console.log("HomeCtrl initiated!");

  $scope.currentLocation = false;

  navigator.geolocation.getCurrentPosition(function(position) {
    $scope.$evalAsync(function(){
      $scope.currentLocation = position.coords;
    });
  });

}]);


  // ***** Removed for good and geolocater acting on page load now *****
  // $scope.findResorts = function() {

    // html5 gets geolocation of user
      // $scope.currentLocation = position;
      // console.log('currentLocation', $scope.currentLocation.coords.latitude + ',' + $scope.currentLocation.coords.longitude);


      // $scope.$evalAsync(function(){
      // });


    // returns array of all ski resorts
    // TODO: do geolocation here to return closest ski resorts
    // $http.get('/api/resort').success(function(data){

    //   $scope.$evalAsync(function(){
    //     console.log('resorts:',data);
    //     $scope.resorts = data.resorts;
    //   })
    // });

  // };