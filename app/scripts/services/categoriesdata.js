'use strict';

/**
 * @ngdoc service
 * @name pokestackApp.categoriesData.js
 * @description
 * # categoriesData.js
 * Value in the pokestackApp.
 */
angular.module('pokestackApp')
  .value('categoriesData', [
    { name:'youtube', icon:'fa-youtube-play'},
    { name:'twitch', icon:'fa-twitch'},
    { name:'bots', icon:'fa-comments'},
    { name:'serverstatus', icon:'fa-server'},
    { name:'communities', icon:'fa-users'},
    { name:'maps', icon:'fa-map'},
    { name:'marketplaces', icon:'fa-shopping-basket'},
    { name:'opensource', icon:'fa-github'},
    { name:'dating', icon:'fa-heart'},
    { name:'mobileapps', icon:'fa-mobile-phone'},
    { name:'tools', icon:'fa-cog'},
    { name:'miscellaneous', icon:'fa-archive'}
  ]);
