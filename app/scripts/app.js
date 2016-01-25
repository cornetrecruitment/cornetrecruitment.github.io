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
            templateUrl: '/views/footer.html',
            controller: 'FooterCtrl'
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
  });
