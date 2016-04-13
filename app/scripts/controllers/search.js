'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SearchCtrl', function ($scope, $http, $log) {
    // $scope.professionals = [
    //   {first_name: "Nilesh", last_name: "Patel"},
    //   {first_name: "John", last_name: "Doe"}
    // ];
    $scope.publications = [];

    $scope.search = function () {
      $scope.professionals = [];
      $http.get('/api/searchprofessionals?search_string=' + $scope.search_string, null)
        .success(searchSuccess)
        .error(searchFailure);
    };

    var searchSuccess = function (data, status) {
      $scope.professionals = data;
    };

    var searchFailure = function (data, status) {

    };

  });
