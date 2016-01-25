'use strict';

/**
 * @ngdoc function
 * @name cornetrecruitmentgithubioApp.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the cornetrecruitmentgithubioApp
 */
angular.module('cornetrecruitmentgithubioApp')
  .controller('JobsCtrl', ['$scope', 'jobService', function ($scope, jobService) {
    $scope.showJobs = false;
    $scope.message = 'Loading ...';
    $scope.jobs = jobService.getJobs();
    $scope.showJobs = true;

    $scope.showLabel = function(job) {
      return job.featured && !job.archived;
    };

  }]);
