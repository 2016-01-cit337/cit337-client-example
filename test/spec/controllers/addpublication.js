'use strict';

describe('Controller: AddpublicationCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AddpublicationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddpublicationCtrl = $controller('AddpublicationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddpublicationCtrl.awesomeThings.length).toBe(3);
  });
});
