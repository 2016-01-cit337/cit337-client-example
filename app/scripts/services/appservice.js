'use strict';

angular.module('clientApp').
service('appService', function() {
  this.appData = {editId: 0, activeIndex: 0};

  this.appData = function() {
    return this.appData;
  };

  this.setEditId = function(id) {
    this.appData.editId = id;
  };

  this.getEditId = function() {
    return this.appData.editId;
  };

  this.setActiveIndex = function (index) {
    this.appData.activeIndex = index;
  }

  this.getActiveIndex = function () {
    return this.appData.activeIndex;
  }
});
