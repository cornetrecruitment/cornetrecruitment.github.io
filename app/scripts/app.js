'use strict';

/**
 * @ngdoc overview
 * @name cornetrecruitmentgithubioApp
 * @description
 * # cornetrecruitmentgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('cornetrecruitmentgithubioApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/jobs', {
        templateUrl: 'views/jobs.html',
        controller: 'JobsCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
