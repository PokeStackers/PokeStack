'use strict';

/**
 * @ngdoc service
 * @name pokestackApp.analyticsService
 * @description
 * # analyticsService
 * Service in the pokestackApp.
 */
angular.module('pokestackApp')
  .service('analyticsService', function () {
    this.recordPageview = function(url) {
      ga('set', 'page', url);
      ga('send', 'pageview');
    };
  });
