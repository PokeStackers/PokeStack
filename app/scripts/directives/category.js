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
        scope.name = attrs.name;
        scope.class = "fa fa-2x icon " + attrs.icon;
        scope.link = '#/' + attrs.name.toLowerCase().replace(/ /g,"_");
      }
    };
  });
