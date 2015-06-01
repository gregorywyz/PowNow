PowApp.factory('ResortService',['$http',function($http){

  return {

    index: function(){

      $http.get('/api/resort')
      .success(function(data){
        console.log('resorts:',data);
        var resorts = data.resorts;
        // callback(null, data);
      })
      .error(function(err){
        callback(err);
      })

    }

  }

}]);