'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pokestackApp
 */

angular.module('pokestackApp')
  .controller('CategoryCtrl', ['$route', '$scope', '$filter', 'categoriesData', 'elasticService', 'esFactory', function ($route, $scope, $filter, categoriesData, elasticService, esFactory) {

      $scope.loading = true;
      $scope.categoryName = $route.current.params.categoryName;
      $scope.class = "fa " + $filter('icon')(categoriesData, $scope.categoryName);

      elasticService.populate($scope.categoryName)
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
        $scope.loading = false;
      });
}]);
