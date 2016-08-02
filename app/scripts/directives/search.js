'use strict';

/**
 * @ngdoc directive
 * @name pokestackApp.directive:search
 * @description
 * # search
 */
angular.module('pokestackApp')
  .directive('search', ['$location', function($location) {
    return {
      templateUrl: 'views/shared/searchbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	scope.redirect = function(){
      		$location.path('/search/' + scope.searchInput);
      	}
      }
    };
  }]);
