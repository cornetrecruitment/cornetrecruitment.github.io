'use strict';

describe('Controller: FooterCtrl', function () {

  // load the controller's module
  beforeEach(module('cornetrecruitmentgithubioApp'));

  var FooterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooterCtrl = $controller('FooterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of jobs to the scope', function () {
    expect(scope.jobs.length).toBe(3);
  });
});
