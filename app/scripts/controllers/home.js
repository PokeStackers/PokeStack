'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the pokestackApp
 */
angular.module('pokestackApp')
  .controller('HomeCtrl', ['$scope', 'categoriesData', function ($scope, categoriesData) {

    $scope.categories = categoriesData;

  }]);
