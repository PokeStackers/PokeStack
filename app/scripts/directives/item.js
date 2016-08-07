'use strict';

/**
 * @ngdoc directive
 * @name pokestackApp.directive:item
 * @description
 * # item
 */
angular.module('pokestackApp')
  .directive('item', ['$location', function ($location) {
    return {
      templateUrl: 'views/shared/item.html',
      restrict: 'E',
      scope: {site: '='},
      link: function postLink(scope, element, attrs) {
        scope.search = function(tag) {
          $location.path('/search/' + tag);
        }
      }
    };
  }]);
