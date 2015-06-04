PowApp.controller('ResortShowCtrl',['$scope','$rootScope','$http','$routeParams','UserService',function($scope,$rootScope,$http,$routeParams,UserService){

  console.log("ResortShowCtrl initiated!");

  $scope.UserService = UserService;
  console.log('UserService',UserService);

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

  var weatherForecast;

  // returns object of mountain weather data from backend controller
  $http.get('/api/resort/' + $routeParams.id + '/show').success(function(data){
    console.log('show:',data);
    $scope.resort = data.resort[0];
    // $scope.weather = data.weather.data;
    $scope.mountainWeather = data.mountainWeather.data.weather[0];
  });


  // $scope.getForecast = function() {

    // returns object of weather forecast data from backend controller
    $http.get('/api/resort/' + $routeParams.id + '/forecast').success(function(data){
      console.log('forecast:',data);
      // weatherForecast = data.weatherForecast.data;
      $scope.forecast = data.weatherForecast.data;
    });
  // };


  $scope.radarUrl="";
  $scope.showRadar=false;
  $scope.radarLoaded=false;

  // set radar to be the url that the backend controller created from the API call
  $scope.getRadar = function() {
    $scope.showRadar = !$scope.showRadar;

    if(!$scope.radarUrl){
      $scope.radarUrl = '/api/resort/' + $routeParams.id + '/radar.gif';
      $scope.radarLoaded = true;
    };
  };

  $scope.addComment = function() {
    alert('clicked')
    // alert('add a comment: ' + $scope.commentText);

    // PostComment.create({postId:$scope.post.id},{body:$scope.commentText},function(data){
    //   $scope.post = data;
    //   $scope.commentText = '';
    // });

    // var comment = new PostComment();
    // comment.body = $scope.commentText;
    // comment.$save({postId:$scope.post.id}, function(data) {
    //   // console.log(data);
    //   // alert('comment added!!');
    //   $scope.post = data;
    //   $scope.commentText = '';
    // });
  }



}]);