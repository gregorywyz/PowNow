PowApp.controller('EditCommentModalCtrl',['$scope','$rootScope','$http','$routeParams','UserService','ResortComment','$resource','$modalInstance','thisComment',function($scope,$rootScope,$http,$routeParams,UserService,ResortComment,$resource,$modalInstance,thisComment){

  $scope.comment = thisComment;

  $scope.editComment = function(comment) {
    ResortComment.update({resortId: comment.resort, id: comment.id},{body: comment.body}, function(data){
      console.log('edited comment:',data);
      // AlertService.add('info','The comment "' + data.body + '" was deleted.');
      $modalInstance.close();
    });
  };

  $scope.closeModal = function(){
    $modalInstance.close();
  };

}]);