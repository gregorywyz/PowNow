PowApp.controller('NavCtrl',['$scope','$rootScope','AlertService','$modal','UserService',function($scope,$rootScope,AlertService,$modal,UserService){

  $scope.isCollapsed = true;

  console.log('NavCtrl initiated!');

  $scope.UserService = UserService;
  console.log('UserService',UserService)

  $scope.showLogin = function(){
    $modal.open({
      templateUrl: '/views/auth/loginModal.html',
      controller: 'AuthLoginModalCtrl'
    })
  };

  $scope.showSignup = function(){
    $modal.open({
      templateUrl: '/views/auth/signupModal.html',
      controller: 'UserSignupModalCtrl'
    })
  };

  $scope.logout = function(){
    UserService.logout(function(err, data){
      console.log('logout:',data)
    });
  };

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

}]);