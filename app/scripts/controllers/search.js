'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the pokestackApp
 */
angular.module('pokestackApp')
  .controller('SearchCtrl', ['$route', '$scope', 'searchService', 'esFactory', function ($route, $scope, searchService, esFactory) {
      searchService.search({
	    index: 'pokestack',
	    body: {
		    query: {
	          match : {
	                 _all : {
	                 	//Dynamically change the query
	                    query :  $route.current.params.searchName,
	                    fuzziness : 1
	                 }
	            }
	      	}
      	}
	})
      .then(function (resp) {
        $scope.clusterState = resp;
        console.log(resp);
        $scope.error = null;
        //Populate the category with the entries from elasticsearch
        $scope.results= [];
        for(var i in resp.hits.hits){
          $scope.results.push(
            {
              name: resp.hits.hits[i]._source.name,
              tags: resp.hits.hits[i]._source.tags,
              description: resp.hits.hits[i]._source.description,
              url: resp.hits.hits[i]._source.url,
              image: resp.hits.hits[i]._source.imageurl
            }
          );
        } 


      })
      .catch(function (err) {
        $scope.clusterState = null;
        $scope.error = err;
        // if the err is a NoConnections error, then the client was not able to
        // connect to elasticsearch. In that case, create a more detailed error
        // message
        if (err instanceof esFactory.errors.NoConnections) {
          $scope.error = new Error('Unable to connect to elasticsearch. ' +
            'Make sure that it is running');
        }
      });

}]);
