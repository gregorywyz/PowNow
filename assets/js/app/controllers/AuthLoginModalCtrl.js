PowApp.controller('AuthLoginModalCtrl',['$scope','UserService','$modalInstance',function($scope,UserService,$modalInstance){

  $scope.login = function(){
    UserService.login($scope.email, $scope.password, function(err, data){
      if (err) {
        alert('Whoops, something bad happened!');
      } else if (data && data.result) {
        $modalInstance.close();
      } else {
        console.log(data);
        alert('Sorry, We did not find you. Please try again or sign up.');
      }
    });
  };

  $scope.closeModal = function(){
    $modalInstance.close();
  };

}]);