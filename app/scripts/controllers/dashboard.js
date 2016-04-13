'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DashboardCtrl', function ($scope, $log, $location, httpService, $cookieStore) {

    $scope.templates =
      [ { id: 0, name: 'Dashboard', url: 'views/default-dash.html'},
        { id: 1, name: 'Biograpgy', url: 'views/biography.html'},
        { id: 2, name: 'Contact Info', url: 'views/contactinfo.html'},
        { id: 3, name: 'Publications', url: 'views/publication.html'},
        { id: 4, name: 'projects', url: 'views/project.html'},
        { id: 5, name: 'Courses', url: 'views/course.html'},
        { id: 6, name: 'Add Publication', url: 'views/addpublication.html'}];

    $scope.curTemplate = $scope.templates[0];

    $scope.setTemplate = function (id) {
      $scope.curTemplate = $scope.templates[id];
    };

    // args={id: -1, name: 'Add Publication', url: 'some url'}
    $scope.$on('changeDashboardView', function(event, args) {
      $scope.curTemplate = args;
    });

    $scope.logout = function () {
      $scope.user = $cookieStore.get('user');
      httpService.request('get', '/api/logout?id=' + $scope.user.id, null, logoutSuccess, logoutSuccess);
    }

    var logoutSuccess = function (data, status) {
      $cookieStore.remove('user');
      $scope.user = null;
      $location.path("")
    }

  });
