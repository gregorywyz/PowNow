PowApp.controller('AuthLoginModalCtrl',['$scope','UserService','$modalInstance',function($scope,UserService,$modalInstance){

  console.log('AuthLoginModalCtrl inititated!');

  $scope.login = function(){
    // console.log(UserService)
    // alert('you want to login with ' + $scope.email + ' : ' + $scope.password)

    UserService.login($scope.email, $scope.password, function(err, data){
      if (err) {
        alert('something broke')
      } else if (data && data.result) {
        $modalInstance.close();
      } else {
        console.log(data);
        alert('unable to log in')
      }
    });
  }

}]);