'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DahboardCtrl
 * @description
 * # DahboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DashboardCtrl', function ($scope, $http, $location, $log, $cookieStore) {

    $scope.templates =
      [ { id: 0, name: 'Dashboard', url: 'views/default-dash.html'},
        { id: 1, name: 'Biograpgy', url: 'views/default-dash.html'},
        { id: 2, name: 'Contact Info', url: 'views/default-dash.html'},
        { id: 3, name: 'Manage Publications', url: 'views/publication.html'},
        { id: 4, name: 'projects', url: 'views/default-dash.html'},
        { id: 5, name: 'Courses', url: 'views/default-dash.html'}];
    $scope.curTemplate = $scope.templates[0];

    $scope.setTemplate = function (id) {
      $scope.curTemplate = $scope.templates[id];
    };

    $scope.user = $cookieStore.get('user');
    $scope.logout = function () {
      console.log(arguments);
      $http.get('/api/logout?id=' + $scope.user.id, null).success(logoutSuccess).error(logoutSuccess);
    };

    var logoutSuccess = function (data, status) {
      $http.defaults.headers.common['X-AUTH-TOKEN'] = '';
      $cookieStore.remove('user');
      $scope.user = null;
      $location.path("")
    };

    // Allowing other controllers to change view
    // args should have template json
    // i.e. {id: -1, name: 'Add Publication', url: 'some url'}
    $scope.$on('changeDashboardView', function(event, args) {
      $scope.curTemplate = args;
    });

  });
