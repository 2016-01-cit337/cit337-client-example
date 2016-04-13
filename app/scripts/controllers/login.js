'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http, $location, $log, $cookieStore, httpService) {
    $scope.err = false;
    $scope.login = function(){
      $scope.loginForm.$setPristine(true);
      $scope.err = false;
      //httpService.request('post', '/api/login', $scope.authInfo, loginSuccess, loginError);
      $http.post('/api/login', $scope.authInfo).success(loginSuccess).error(loginError);
    }

    var loginError = function(data, status) {
      if(status == 401 || status == 400)
      {
        $scope.err = true;
      }
    };

    var loginSuccess = function (data, status) {
      $cookieStore.put('user', data);
      $http.defaults.headers.common['X-AUTH-TOKEN'] = data.token;
      $location.path("dashboard");
    };

  });
