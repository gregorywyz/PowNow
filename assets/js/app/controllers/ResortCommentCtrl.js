PowApp.controller('ResortCommentCtrl',['$scope','$rootScope','$http','$routeParams','UserService','ResortComment','$resource',function($scope,$rootScope,$http,$routeParams,UserService,ResortComment,$resource){

  console.log("ResortCommentCtrl initiated!");

  $scope.UserService = UserService;
  // console.log('UserService',UserService);

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

  $scope.loadComments = function() {
    $http.get('/api/resort/' + $routeParams.id).success(function(data){
      // console.log('comments', data.comments);
      $scope.comments = data.comments;
    })
  }
  $scope.loadComments();

  $scope.comment = {text: ''};

  $scope.addComment = function() {

    ResortComment.create({resortId:$routeParams.id},{body:$scope.comment.text,userName:$scope.currentUser.name},function(data){
      console.log('data',data)
      $scope.comments = data.comments;
      $scope.comment.text = {text: ''};
    });

  }

  $scope.editComment = function(commentId) {
    alert('clicked edit '+ commentId)
  }

  $scope.deleteComment = function(commentId,resortId) {

    ResortComment.delete({resortId: resortId, id: commentId}, function(data){
      console.log('deleted comment:',data);
      // AlertService.add('info','The post "' + data.title + '" was deleted.');
      $scope.loadComments();
    });
  }



}]);