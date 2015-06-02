PowApp.directive('alerts',function(){

  return {
    restrict: 'E',
    scope: {},
    controller: ['$scope','AlertService',function($scope,AlertService){

      // var alerts = [
      //     {type:'danger',text:'This is an error.'},
      //     {type:'info',text:'This is some info.'}
      //   ];

      $scope.getAlerts = function(){
        return AlertService.get();
      }

      $scope.closeAlert = function(idx){
        AlertService.remove(idx);
      }

    }],
    replace: true,
    template: '<alert ng-repeat="alert in getAlerts()" type="{{alert.type}}" close="$parent.closeAlert($index)">{{alert.text}}</alert>'
  }

});