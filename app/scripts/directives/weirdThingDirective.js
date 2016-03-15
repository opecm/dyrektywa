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
          restrict: 'E',
          scope: {
            rWidth: '=',
            rHeight: '=',
            rColor: '='
          },
          link: function ($scope, element) {
            element.html(' <div class="magic">nie dzialam</div>')
            $('div.magic').css({"background-color":$scope.rColor, "height" :$scope.rHeight, "width" :$scope.rWidth})
          }
        }
    });