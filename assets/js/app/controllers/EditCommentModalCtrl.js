PowApp.controller('EditCommentModalCtrl',['$scope','$rootScope','$http','$routeParams','UserService','ResortComment','$resource','$modalInstance','thisComment',function($scope,$rootScope,$http,$routeParams,UserService,ResortComment,$resource,$modalInstance,thisComment){

  console.log('EditCommentModalCtrl initiated!');

  $scope.comment = thisComment;
  console.log(thisComment);


  $scope.editComment = function(comment) {

    console.log("from modal",comment)

    ResortComment.update({resortId: comment.resort, id: comment.id},{body: comment.body}, function(data){
      console.log('edited comment:',data);
      // AlertService.add('info','The comment "' + data.body + '" was deleted.');
      $modalInstance.close();
    });
  };

}]);