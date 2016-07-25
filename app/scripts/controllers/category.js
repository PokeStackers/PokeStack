'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pokestackApp
 */
angular.module('pokestackApp')
  .controller('CategoryCtrl', ['$scope', 'searchService', function ($scope, searchService) {


    //TODO
    //Call to search Service and send data to $scope.results

    $scope.results = [
      {
        name: 'PokemonGO',
        tags: ['tag1', 'tag2'],
        description: 'Cool app',
        url: 'http://google.com'
      },
      {
        name: 'Sandoche',
        tags: ['tag1'],
        description: 'Cool site',
        url: 'http://sandoche.com'
      }
    ];



  }]);
