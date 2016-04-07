'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, $http) {

      $scope.register = function(){
        console.log($scope.user);
        $http.post('api/register', $scope.user)
          .error(function(data, status){
            if(status === 400)
            {
              $scope.err = data;
              console.log(data);
            }
          })
          .success(function(data, status){

          })
      }
  });
