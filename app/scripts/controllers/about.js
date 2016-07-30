'use strict';

/**
 * @ngdoc function
 * @name pokestackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pokestackApp
 */
angular.module('pokestackApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});

// var myApp = angular.module('myApp', ['elasticsearch']);

//     module.service('client', function (esFactory) {
//     	console.log("Elastic");
// 	  return esFactory({
// 	    host: 'http://pokestack-paschalis.rhcloud.com/',
// 	    apiVersion: '1.7.1',
//         log: 'trace'
// 	  });
// 	});

// 	myApp.controller('ExampleController', function ($scope, client, esFactory) {
// 		console.log("Elastic");
//       client.search({
// 	    index: 'pokestack',
// 	    body: {
// 	      size:"50",
// 	      sort: { "name": { order: "asc" }},   
// 	      query: {
// 	          match_all : {}
// 	      }
// 	    }
// 	})
//       .then(function (resp) {
//         $scope.clusterState = resp;
//         console.log(resp);
//         $scope.error = null;
//       })
//       .catch(function (err) {
//         $scope.clusterState = null;
//         $scope.error = err;
//         // if the err is a NoConnections error, then the client was not able to
//         // connect to elasticsearch. In that case, create a more detailed error
//         // message
//         if (err instanceof esFactory.errors.NoConnections) {
//           $scope.error = new Error('Unable to connect to elasticsearch. ' +
//             'Make sure that it is running and listening at http://pokestack-paschalis.rhcloud.com/');
//         }
//       });
//     });
