'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the pokestackApp
 */
angular.module('pokestackApp')
  .controller('SearchCtrl', ['$route', '$scope', 'elasticService', 'esFactory', '$location', function ($route, $scope, elasticService, esFactory, $location) {

    $scope.loading = true;

    if($route.current.params.searchName){
     	elasticService.search($route.current.params.searchName)
	      .then(function(response) {
	        $scope.results= [];
	        for(var i in response){
	          $scope.results.push(response[i])
	        }
	          $scope.loading = false;
	        if(response.length = 0){
	          $scope.noresults = true;
	        }
	      })
	      .catch(function (err) {
	      	//TODO Handle the error
	      });
		
  	}
  	else{
		$location.path('/')
  	}
}]);
