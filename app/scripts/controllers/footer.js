'use strict';

/**
 * @ngdoc function
 * @name cornetrecruitmentgithubioApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the cornetrecruitmentgithubioApp
 */
angular.module('cornetrecruitmentgithubioApp')
  .controller('FooterCtrl', ['$scope', 'jobService', function ($scope, jobService) {
    $scope.showJobs = false;
    $scope.message = 'Loading ...';
    $scope.jobs = jobService.getJobs();
    $scope.showJobs = true;
  }]);
