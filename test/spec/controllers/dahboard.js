'use strict';

describe('Controller: DahboardCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DahboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DahboardCtrl = $controller('DahboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DahboardCtrl.awesomeThings.length).toBe(3);
  });
});
