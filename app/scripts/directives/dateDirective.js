'use strict';
/**
 * @ngdoc function
 * @name practiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practiceApp
 */
angular.module('mojaApkaApp')
    .directive('dateDirective', function () {
      return {
        template: '<span>{{date}}</span>',
          restrict: 'E',
          scope: {

            momentFormat:'='
          },
          controller: function ($scope) {
            $scope.date = moment().format($scope.momentFormat);
            console.log($scope)
          }
        }
    });