'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, $http, $location, $cookieStore) {

      $scope.register = function(){
        console.log($scope.user);
        $scope.registerForm.$setPristine(true);
        $http.post('api/register', $scope.user)
          .error(function(data, status){
            if(status === 400)
            {
              $scope.err = data;
              console.log($scope.err);
            }
          })
          .success(function(data, status){
            $cookieStore.put('user', data);
            $http.defaults.headers.common['X-AUTH-TOKEN'] = data.token;
            $location.path("dashboard");
          })
      }
  });
