'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AddpublicationCtrl
 * @description
 * # AddpublicationCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AddpublicationCtrl', function ($scope, $log, $cookieStore, $http, appService) {
    // Some form and model variables
    var err = undefined;

    $scope.addPublication = function(){
      var user = $cookieStore.get("user");
      $scope.addpublicationform.$setPristine(true);
      $http.post('api/addpublication', $scope.publication)
        .success(addPublicationSuccess)
        .error(addPublicationError);
    };

    var addPublicationError = function (data, status) {
      if(status === 400)
      {
        $scope.err = data;
        console.log($scope.err);
      }
    };

    var addPublicationSuccess = function (data, status) {
      if(status === 200)
        $scope.$emit('changeDashboardView', {id: -1, name: 'Manage Publications', url: 'views/publication.html'});
    };

    // If this is an edit mode, get the publication to be edited
    var pub_id = appService.getEditId();
    appService.setEditId(0);
    if(pub_id !== 0) {
      $http.get('api/getpublication?id=' + pub_id, null)
        .success(function (data, status) {
          $scope.publication = data;
        })
        .error(function (data, status) {
          // Do nothing
        });
    }

  });
