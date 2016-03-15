'use strict';

/**
 * @ngdoc overview
 * @name mojaApkaApp
 * @description
 * # mojaApkaApp
 *
 * Main module of the application.
 */
angular
  .module('mojaApkaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
 })
      .when('/date', {
        templateUrl: 'views/dateView.html',
        controller: 'DateCtrl',
        controllerAs: 'date'

      })
      .when('/weirdThing', {
        templateUrl: 'views/weirdThingView.html',
        controller: 'weirdThingCtrl',
        controllerAs: 'weirdThing'

      })



      .otherwise({
        redirectTo: '/'
      });
  });
