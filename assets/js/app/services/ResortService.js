PowApp.factory('Resort',['$resource',function($resource){

  return $resource('/api/resort/:id', null, {
    'update': {method:'PUT'}
  });

}]);