'use strict';



angular.module('mojaApkaApp')
  .controller('faasDetailCtrl', function ($scope, $routeParams) {
  	
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


$scope.example = {
	text: ""
}

var  cos = this;
cos.name=$routeParams.name;

$scope.myFunc = function (){
	window.location = "http://foaas.com/" + cos.name + '/' + $scope.example.text;
}
  });

