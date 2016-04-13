/*
 * Makes authorized and un-authorized requests
 */
angular.module('clientApp')
  .factory('httpService', function($http, $cookieStore){
    var factory = {};

    factory.request = function(method, url, data, okCallback, koCallback){
      $http({
        method: method,
        url: url,
        data: data
      }).success(okCallback).error(koCallback);
    };

    factory.authRequest = function(method, url, data, okCallback, koCallback) {
      $http({
        method: method,
        url: url,
        data: data,
        headers: {'X-AUTH-TOKEN': $cookieStore.get('user')['token']}
      }).success(okCallback).error(koCallback);
    };
    return factory;
  });
