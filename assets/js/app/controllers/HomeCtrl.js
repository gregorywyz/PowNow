PowApp.controller('HomeCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

  $scope.currentLocation = false;
  $scope.loading = false;

  // get GPS location on home page load
  var geoLocateMe = function() {
    // check if navigotor is available on browser
    if (!navigator.geolocation){
      alert('Geolocation is not supported by your browser. This app is just not for you.');
      return;
    };

    // set current location and turns off loader
    function succes(position) {
      console.log('location found');
      $scope.$evalAsync(function(){
        $scope.loading = false;
        $scope.currentLocation = position.coords;
      });
    };

    function error() {
      console.log('sorry, we could not find your BBQ');
    };

    // start loader
    $scope.loading = true;

    // find geolocation
    navigator.geolocation.getCurrentPosition(succes, error);
  };

  geoLocateMe();

  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log('gathering location');
  //   $scope.loading = true;
  //   $scope.$evalAsync(function(){
  //     console.log('location found');
  //     $scope.loading = false;
  //     $scope.currentLocation = position.coords;
  //   });
  // });

}]);
