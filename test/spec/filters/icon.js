'use strict';

describe('Filter: icon', function () {

  // load the filter's module
  beforeEach(module('pokestackApp'));

  // initialize a new instance of the filter before each test
  var icon;
  beforeEach(inject(function ($filter) {
    icon = $filter('icon');
  }));

  it('should return the input prefixed with "icon filter:"', function () {
    var text = 'angularjs';
    expect(icon(text)).toBe('icon filter: ' + text);
  });

});
