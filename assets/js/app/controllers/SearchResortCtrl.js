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
    // returns array of closest ski areas
    // console.log('resorts:',data);
    $scope.resorts = data.resorts;

    // make quick call to openweather to display current conditions
    data.resorts.forEach(function(resort,idx) {

      // build up url for newSnow
      var req = {
        url: "http://api.openweathermap.org/data/2.5/weather",
        params: {
          units: 'imperial',
          lat: resort.location.lat,
          lon: resort.location.long
        }
      };

      // call openweather api for current conditions
      $http(req).success(function(snowData) {
        $scope.resorts[idx].desc = snowData.weather[0].main;
        $scope.resorts[idx].temp = (Math.round(snowData.main.temp * 10) / 10) + ' \xB0F';
        if (snowData.snow) {
          $scope.resorts[idx].snow = (Math.round(snowData.snow['3h'] * 10) / 10) + ' in Fresh Snow';
        } else {
          $scope.resorts[idx].snow = 'No Freshies';
        }
      });

    });
    console.log("final scope",$scope.resorts);
  });

}]);