'use strict';

/**
 * @ngdoc service
 * @name pokestackApp.elasticService
 * @description
 * # elasticService
 * Service in the pokestackApp.
 */
angular.module('pokestackApp')
  .service('elasticService', ['$rootScope','$q',  'searchService', 'esFactory', function ($rootScope, $q, searchService, esFactory) {

  	var search = {

      	populate: function (category){
      		var deferred = $q.defer();
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
		       	//Populate the category with the entries from elasticsearch
		        var results= [];
		        for(var i in resp.hits.hits){

		          	results.push(
		            {
		              	name: resp.hits.hits[i]._source.name,
		              	tags: resp.hits.hits[i]._source.tags,
		              	description: resp.hits.hits[i]._source.description,
		              	url: resp.hits.hits[i]._source.url,
		              	image: resp.hits.hits[i]._source.imageurl
		            }
		          	);
		        }
		        deferred.resolve(results);

		    }).catch(function (err) {
		        deferred.resolve(err);
		    });

		    return deferred.promise;
		},

		search: function(searchterm){
			var deferred = $q.defer();
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
		        var results= [];
		        for(var i in resp.hits.hits){
		          results.push(
		            {
		              name: resp.hits.hits[i]._source.name,
		              tags: resp.hits.hits[i]._source.tags,
		              description: resp.hits.hits[i]._source.description,
		              url: resp.hits.hits[i]._source.url,
		              image: resp.hits.hits[i]._source.imageurl
		            }
		          );
		        }

	          deferred.resolve(results);

		      })
		      .catch(function (err) {
		        deferred.resolve(err);
		      });

		      return deferred.promise;
		}
  
    }
  
    return search;

}]);