'use strict';





angular.module('mojaApkaApp')
    .directive('faasListDirective', function () {
      return {
          templateUrl: 'views/faas-list.html',
          restrict: 'E',
          scope: {
          },
          replace: true,
           controller: function ($scope, $http ){
             $http.get('http://www.foaas.com/operations').then(function(response){
              $scope.myData = response.data
             });
                 
          }
        };
      
    }); 
