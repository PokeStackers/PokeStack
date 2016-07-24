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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the category directive');
      }
    };
  });
