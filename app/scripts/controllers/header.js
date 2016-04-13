'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HeaderCtrl', function ($scope, $log, $cookieStore, $location, appService) {
    $scope.user = $cookieStore.get('user');

    $scope.links=[
      {name: "Home", url:"#/", cond: true},
      {name: "About", url:"#/about", cond: true},
      {name: "Contact", url:"#/contact", cond: true},
      {name: "Dashboard", url:"#/dashboard", cond: "user"},
      {name: "Login", url:"#/login", cond: "!user"}
    ];

    $scope.selected = appService.getActiveIndex();
    $scope.select = function (index) {
      appService.setActiveIndex(index);
    };
  });
