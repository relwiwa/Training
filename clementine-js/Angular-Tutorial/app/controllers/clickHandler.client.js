'use strict';

(function() {

angular.module('clementineApp', ['ngResource']);

angular.module('clementineApp')
.controller('clickController', ['$resource', function($resource) {
  var vm = this;
  var Click = $resource('/api/clicks');

  this.getClicks = function() {
    Click.get(function(results) {
      vm.clicks = results.clicks;
    });
  };

  this.getClicks();

  // Increment is done server-sideas POST-request via save-function
  this.addClick = function() {
    Click.save(function() {
      vm.getClicks();
    });
  };

  // Reset is done server-side as DELETE-request via remove-function 
  this.resetClicks = function() {
    Click.remove(function () {
      vm.getClicks();
    });
  };

}]);

})();