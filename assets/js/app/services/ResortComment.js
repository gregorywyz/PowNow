PowApp.factory('ResortComment',['$resource',function($resource){

  return $resource('/api/resort/:resortId/comments/:id', null, {
    'update': { method:'PUT' },
    'create': {method:'POST'}
  });

}]);