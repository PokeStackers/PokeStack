'use strict';

/**
 * @ngdoc service
 * @name pokestackApp.elasticService
 * @description
 * # elasticService
 * Service in the pokestackApp.
 */
angular.module('pokestackApp')
  .service('elasticService', ['$route', '$scope', '$filter', 'categoriesData', 'searchService', 'esFactory', function ($route, $scope, $filter, categoriesData, searchService, esFactory) {

  	var search = {

      	populate: function (category){
	      	searchService.search({
			    index: 'pokestack',
			    //Dynamically change the query based on the category
			    type: category ,
			    body: {
			    	sort: { "name": { order: "asc" }},
			    	query: {
			        	match_all : {}
		    		}
		    	}
		    }).then(function (resp) {
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

		        $scope.loading = false;
		    }).catch(function (err) {
		        $scope.clusterState = null;
		        $scope.error = err;
		        // if the err is a NoConnections error, then the client was not able to
		        // connect to elasticsearch. In that case, create a more detailed error
		        // message
		        if (err instanceof esFactory.errors.NoConnections) {
		          $scope.error = new Error('Unable to connect to elasticsearch. ' +
		            'Make sure that it is running');
		        }

		        $scope.loading = false
		    });
		},

		search: function(searchterm){

			searchService.search({
			    index: 'pokestack',
			    body: {
				    query: {
			          match : {
			                 _all : {
			                    query :  searchterm,
			                    fuzziness : 1
			                 }
			            }
			      	}
		      	}
			}).then(function (resp) {
		        $scope.clusterState = resp;
		        console.log(resp);
		        $scope.error = null;
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

	          $scope.loading = false;

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
		        $scope.loading = false;
		      });
		}
  
    }
  
    return search;

}]);