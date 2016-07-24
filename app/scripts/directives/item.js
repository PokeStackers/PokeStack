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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the item directive');
      }
    };
  });
