PowApp.controller('SearchResortCtrl',['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){

  var query = $location.search();

  // pass ski resort data to backend for ext API requests
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

}]);