'use strict';

/**
 * @ngdoc directive
 * @name pokestackApp.directive:item
 * @description
 * # item
 */
angular.module('pokestackApp')
  .directive('item', function () {
    return {
      templateUrl: 'views/shared/item.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
