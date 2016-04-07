'use strict';

describe('Controller: PublicationCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PublicationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PublicationCtrl = $controller('PublicationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PublicationCtrl.awesomeThings.length).toBe(3);
  });
});
