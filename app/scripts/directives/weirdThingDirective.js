'use strict';
/**
 * @ngdoc function
 * @name practiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practiceApp
 */
angular.module('mojaApkaApp')
    .directive('weirdThingDirective', function () {
      return {
          template: '<div></div>',
          restrict: 'E',
          scope: {
            rHeight: '=',
            rWidth: '=',
            rFont: '=',
            rColor: '='
          },
          link: function ($scope, element) {
            document.getElementById("weirdThingDirective")
          }
        }
    });