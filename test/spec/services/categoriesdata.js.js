'use strict';

describe('Service: categoriesData.js', function () {

  // load the service's module
  beforeEach(module('pokestackApp'));

  // instantiate service
  var categoriesData.js;
  beforeEach(inject(function (_categoriesData.js_) {
    categoriesData.js = _categoriesData.js_;
  }));

  it('should do something', function () {
    expect(!!categoriesData.js).toBe(true);
  });

});
