'use strict';

/**
 * @ngdoc directive
 * @name pokestackApp.directive:category
 * @description
 * # category
 */
angular.module('pokestackApp')
  .directive('category', function () {
    return {
      templateUrl: 'views/shared/tile.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var test = 0;
      }
    };
  });
