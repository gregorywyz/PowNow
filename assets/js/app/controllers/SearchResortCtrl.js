PowApp.controller('SearchResortCtrl',['$scope','$rootScope','Resort','$http',function($scope,$rootScope,Resort,$http){

  console.log("SearchShowCtrl initiated!");

    // // Original way
    // Resort.query(function(data){
    //   $scope.resorts = data;
    //   // $rootScope.loading = false;
    //   console.log("resorts:",data);
    // });

  $http.get('/api/resort').success(function(data){
    console.log('resorts:',data);
    console.log('name:',data[0].name)
    $scope.resorts = data;
  });

}]);