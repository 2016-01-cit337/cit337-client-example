'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http, $location, $cookieStore) {
    $scope.err = false;

    $scope.login = function () {
      $http.post('/api/login', $scope.authInfo).success(loginSuccess).error(loginFailure);
    }

    var loginSuccess = function(data, status){
      $cookieStore.put('user', data);
      $http.defaults.headers.common['X-AUTH-TOKEN'] = data.token;
      $location.path("dashboard");
    }

    var loginFailure = function(data, status){
      $scope.err = true;
    }

  });
