PowApp.controller('ResortCommentCtrl',['$scope','$rootScope','$http','$routeParams','UserService','ResortComment','$resource','$modal',function($scope,$rootScope,$http,$routeParams,UserService,ResortComment,$resource,$modal){

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

  $scope.loadComments = function() {
    $http.get('/api/resort/' + $routeParams.id).success(function(data){
      $scope.comments = data.comments;
    });
  };
  $scope.loadComments();

  $scope.comment = {text: ''};

  $scope.addComment = function() {
    ResortComment.create({
      resortId:$routeParams.id
    },{
      body:$scope.comment.text,
      userName:$scope.currentUser.name
    },function(data){
      $scope.comments = data.comments;
      $scope.comment.text = '';
    });
  };

  $scope.showEditModal = function(comment){
    $modal.open({
      templateUrl: '/views/comment/editCommentModal.html',
      controller: 'EditCommentModalCtrl',
      resolve: {
        thisComment: function() {
          return comment
        }
      }
    });
  };

  $scope.deleteComment = function(commentId,resortId) {
    ResortComment.delete({resortId: resortId, id: commentId}, function(data){
      // AlertService.add('info','The comment "' + data.body + '" was deleted.');
      $scope.loadComments();
    });
  };

}]);