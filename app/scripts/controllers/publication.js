'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PublicationCtrl
 * @description
 * # PublicationCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PublicationCtrl', function ($scope, $http, $log, $cookieStore, appService) {

    $scope.loadAddPublication = function () {
      $scope.$emit('changeDashboardView', { id: 6, name: 'Add Publication', url: 'views/addpublication.html'});
    };

    $scope.editPublication = function (id) {
      appService.setEditId(id);
      $scope.$emit('changeDashboardView', {id: 0, name: 'Edit Publication', url: 'views/addpublication.html'});
    };

    $scope.deletePublication = function (id) {
      $http.get('api/deletepublication?id=' + id, null)
        .success(function (data, status) {
          $scope.getPublications();
        }).error(function (data, status) {

      });
    };

    $scope.publicationCount = 0;

    $scope.getPublications = function () {
      $http.get('api/getallpublications',null)
        .success(getPublicationSuccess).error(getPublicationError);
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
      $scope.$emit('changeDashboardView', {id: -1, name: 'Add Publication',
        url: 'views/addpublication.html'});
    };

    $scope.getPublications();

  });
