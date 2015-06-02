PowApp.controller('UserSignupModalCtrl',['$scope','UserService','$modalInstance',function($scope,UserService,$modalInstance){

  console.log('UserSignupModalCtrl inititated!');

  $scope.signup = function(){

    // alert('you want to signup with ' + $scope.name + ' : ' + $scope.email + ' : ' + $scope.password)

    UserService.signup($scope.name, $scope.email, $scope.password, function(err, data){
      if (err) {
        alert('something broke')
      } else if (data && data.result) {
        $modalInstance.close();
      } else {
        console.log(data);
        alert('unable to sign up')
      }
    });
  }

}]);