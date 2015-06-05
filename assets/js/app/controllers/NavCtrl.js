PowApp.controller('NavCtrl',['$scope','$rootScope','AlertService','$modal','UserService',function($scope,$rootScope,AlertService,$modal,UserService){

  $scope.isCollapsed = true;

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

  $scope.showLogin = function(){
    $modal.open({
      templateUrl: '/views/auth/loginModal.html',
      controller: 'AuthLoginModalCtrl'
    });
  };

  $scope.showSignup = function(){
    $modal.open({
      templateUrl: '/views/auth/signupModal.html',
      controller: 'UserSignupModalCtrl'
    });
  };

  $scope.logout = function(){
    UserService.logout(function(err, data){
      console.log('logout:',data)
    });
  };

}]);