'use strict';

describe('Controller: JobsCtrl', function () {

  // load the controller's module
  beforeEach(module('cornetrecruitmentgithubioApp'));

  var JobsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JobsCtrl = $controller('JobsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of jobs to the scope', function () {
    expect(scope.jobs.length).toBe(3);
  });
});
