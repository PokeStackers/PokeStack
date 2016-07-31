'use strict';

/**
 * @ngdoc service
 * @name pokestackApp.searchService
 * @description
 * # searchService
 * Service in the pokestackApp.
 */
angular.module('pokestackApp')
  .service('searchService', function (esFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return esFactory({
	    host: 'Enter elasticsearch host name',
	    apiVersion: '1.7',
        log: 'trace'
    });
  });
