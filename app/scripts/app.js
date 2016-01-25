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
/*    'ngRoute'*/
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app',{
        url: '/',
        views: {
          'header': {
            templateUrl: '/views/header.html'
          },
          'content': {
            templateUrl: '/views/main.html', 
            controller: 'MainCtrl'
          },
          'footer': {
            templateUrl: '/views/footer.html'
          }
        }
      })

      .state('app.jobs', {
        url:'jobs',
        views: {
          'content@': {
            templateUrl : '/views/jobs.html',
            controller  : 'JobsCtrl'                  
          }
        }
      })

      .state('app.services', {
        url:'services',
        views: {
          'content@': {
            templateUrl : '/views/services.html',
            controller  : 'ServicesCtrl'                  
          }
        }
      })

      .state('app.about', {
        url:'about',
        views: {
          'content@': {
            templateUrl : '/views/about.html',
            controller  : 'AboutCtrl'                  
          }
        }
      })

     .state('app.contact', {
        url:'contact',
        views: {
          'content@': {
            templateUrl : '/views/contact.html',
            controller  : 'ContactCtrl'                  
          }
        }
      });

            /*
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
*/
  });
