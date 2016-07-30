'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pokestackApp
 */
// angular.module('pokestackApp')
//   .controller('CategoryCtrl', function () {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });  

angular.module('pokestackApp')
  .controller('CategoryCtrl', ['$scope', 'searchService', 'esFactory', function ($scope, searchService, esFactory) {
		console.log("Elastic");
      searchService.search({
	    index: 'pokestack',
	    body: {
	      size:"50",
	      sort: { "name": { order: "asc" }},   
	      query: {
	          match_all : {}
	      }
	    }
	})
      .then(function (resp) {
        $scope.clusterState = resp;
        console.log(resp);
        $scope.error = null;
      })
      .catch(function (err) {
        $scope.clusterState = null;
        $scope.error = err;
        // if the err is a NoConnections error, then the client was not able to
        // connect to elasticsearch. In that case, create a more detailed error
        // message
        if (err instanceof esFactory.errors.NoConnections) {
          $scope.error = new Error('Unable to connect to elasticsearch. ' +
            'Make sure that it is running and listening at http://pokestack-paschalis.rhcloud.com/');
        }
      });

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
