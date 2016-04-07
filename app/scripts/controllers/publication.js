'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PublicationCtrl
 * @description
 * # PublicationCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PublicationCtrl', function ($scope, $http, $log, $location, appService) {
    $scope.publicationCount = 0;

    $scope.getPublications = function () {
      $http.get('api/getallpublications', null).success(getPublicationSuccess).error(getPublicationError);
    };

    $scope.deletePublication = function(pub_id){
      $http.get('api/deletepublication?id=' + pub_id, null)
        .success(function (data, status) {
          $scope.getPublications();
        }).error(function (data, status) {

      });
    };

    $scope.editPublication = function (pub_id) {
      appService.setEditId(pub_id)
      $scope.$emit('changeDashboardView', {id: -1, name: 'Add Publications', url: 'views/addpublication.html'});
    };

    var getPublicationSuccess = function (data, status) {
      if(status === 200){
        $scope.publicationCount = data.length;
        $scope.publications = data;
      }
    };
    var getPublicationError = function (data, status) {
      console.log("Error requesting publications information");
    };

    $scope.loadAddPublication = function () {
      $scope.$emit('changeDashboardView', {id: -1, name: 'Add Publication', url: 'views/addpublication.html'});
    };

    $scope.getPublications();
  });
