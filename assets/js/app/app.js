var PowApp = angular.module('PowApp', ['ngRoute','ngResource','ui.bootstrap']);

PowApp.run(['$rootScope','AlertService','UserService',function($rootScope,AlertService,UserService){

  console.log('PowNow is up and running...');

  UserService.check(function(err, data){
    console.log('check:',err,data);
  });

  $rootScope.$on('$routeChangeStart', function(event,next,current){
    AlertService.clear();
  });

}]);


PowApp.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl:'/views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about',{
    templateUrl:'/views/about.html',
    controller:'StaticCtrl'
  })
  .when('/resort',{
    templateUrl:'/views/resort/index.html',
    controller:'SearchResortCtrl'
  })
  .when('/resort/:id',{
    templateUrl:'/views/resort/show.html',
    controller:'ResortShowCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })


}]);