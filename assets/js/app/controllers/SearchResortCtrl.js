PowApp.controller('SearchResortCtrl',['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){

  console.log("SearchResortCtrl initiated!", query);

  var query = $location.search();

  // *** PowApp will automatically look up resorts when on /resort ***

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