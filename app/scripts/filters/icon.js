'use strict';

/**
 * @ngdoc filter
 * @name pokestackApp.filter:icon
 * @function
 * @description
 * # icon
 * Filter in the pokestackApp.
 */
angular.module('pokestackApp')
  .filter('icon', function () {
    return function (input, categoryName) {
      var category = input.filter(function(element) {
            return element.name == categoryName;
      });
      return category[0].icon;
    };
  });
