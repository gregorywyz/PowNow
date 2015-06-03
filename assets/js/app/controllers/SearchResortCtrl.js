PowApp.controller('SearchResortCtrl',['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){

  var query = $location.search();

  console.log("SearchResortCtrl initiated!", query);

  // *** PowApp will automatically look up resorts when on /resort ***

  // html5 gets geolocation of user
  // navigator.geolocation.getCurrentPosition(function(position) {

    // $scope.$evalAsync(function(){

      // $scope.currentLocation = position;
      // console.log('currentLocation', $scope.currentLocation.coords.latitude + ',' + $scope.currentLocation.coords.longitude);


      // returns array of all ski resorts
      // TODO: do geolocation here to return closest ski resorts
      // ******* took geolocate away and handling it in HomeCtrl when page loads *******
      $http({
        method:'get',
        url:'/api/resort',
        params:{ // VALUES THAT CAN BE ACCESSED IN BACKEND CTRL W/ req.query.[]
          latitude: query.lat,
          longitude: query.lng
        }
      }).success(function(data){
        console.log('resorts:',data);
        $scope.resorts = data.resorts;
      });
    // });
  // });

}]);