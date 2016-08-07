'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pokestackApp
 */

angular.module('pokestackApp')
  .controller('CategoryCtrl', ['$route', '$scope', '$filter', 'categoriesData', 'searchService', 'esFactory', function ($route, $scope, $filter, categoriesData, searchService, esFactory) {

      $scope.loading = true;
      $scope.categoryName = $route.current.params.categoryName;
      $scope.class = "fa " + $filter('icon')(categoriesData, $scope.categoryName);

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

        $scope.loading = false
      });

}]);
