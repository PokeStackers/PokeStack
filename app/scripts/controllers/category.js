'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pokestackApp
 */

angular.module('pokestackApp')
  .controller('CategoryCtrl', ['$route', '$scope', 'searchService', 'esFactory', function ($route, $scope, searchService, esFactory) {
      console.log($route);
      searchService.search({
	    index: 'pokestack',
      //Dynamically change the query based on the category
      type: $route.current.params.categoryName,
	    body: {
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

        //for(i in resp.hits.hits)
        $scope.results = [
          {
            name: resp.hits.hits[0]._source.name,
            tags: resp.hits.hits[0]._source.tags,
            description: resp.hits.hits[0]._source.description,
            url: resp.hits.hits[0]._source.url,
          },
          {
            name: 'Sandoche',
            tags: ['tag1'],
            description: 'Cool site',
            url: 'http://sandoche.com'
          }
        ];        


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

}]);
