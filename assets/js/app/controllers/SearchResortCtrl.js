PowApp.controller('SearchResortCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

  console.log("SearchResortCtrl initiated!");

  // *** PowApp will automatically look up resorts when on /resort ***

  // html5 gets geolocation of user
  navigator.geolocation.getCurrentPosition(function(position) {

    $scope.$evalAsync(function(){

      $scope.currentLocation = position;
      console.log('currentLocation', $scope.currentLocation.coords.latitude + ',' + $scope.currentLocation.coords.longitude);

      // returns array of all ski resorts
      // TODO: do geolocation here to return closest ski resorts
      $http.get('/api/resort').success(function(data){
        console.log('resorts:',data);
        $scope.resorts = data.resorts;
      });
    });
  });

  // *** moved into $evalAsync to run after location was found ***
  // returns array of all ski resorts
  // TODO: do geolocation here to return closest ski resorts
  // $http.get('/api/resort').success(function(data){
  //   console.log('resorts:',data);
  //   $scope.resorts = data.resorts;
  // });

}]);