PowApp.controller('HomeCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

  console.log("HomeCtrl initiated!");

  $scope.findResorts = function() {

    // html5 gets geolocation of user
    navigator.geolocation.getCurrentPosition(function(position) {

      $scope.$evalAsync(function(){
        $scope.currentLocation = position;
        console.log('currentLocation', $scope.currentLocation.coords.latitude + ',' + $scope.currentLocation.coords.longitude);
      });
    });

    // returns array of all ski resorts
    // TODO: do geolocation here to return closest ski resorts
    $http.get('/api/resort').success(function(data){

      $scope.$evalAsync(function(){
        console.log('resorts:',data);
        $scope.resorts = data.resorts;
      })
    });

  };

}]);


    // // no need for service on 'get' | save for reference for API calls
    // ResortService.index(function(err,data){
    //   console.log('HomeCtrl RS data:',data);
    //   $scope.resorts = data;
    // });