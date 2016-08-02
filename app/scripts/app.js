'use strict';

/**
 * @ngdoc overview
 * @name pokestackApp
 * @description
 * # pokestackApp
 *
 * Main module of the application.
 */
angular
  .module('pokestackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'elasticsearch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/search/:searchName?', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/:categoryName', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
