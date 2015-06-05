PowApp.controller('UserSignupModalCtrl',['$scope','UserService','$modalInstance',function($scope,UserService,$modalInstance){

  $scope.signup = function(){
    UserService.signup($scope.name, $scope.email, $scope.password, function(err, data){
      if (err) {
        alert('Super weird, something bad happened.');
      } else if (data && data.result) {
        $modalInstance.close();
      } else {
        console.log(data);
        alert('Sorry, unable to sign you up. Please try again.');
      };
    });
  };

  $scope.closeModal = function(){
    $modalInstance.close();
  };

}]);