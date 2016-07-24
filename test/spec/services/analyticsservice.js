'use strict';

describe('Service: analyticsService', function () {

  // load the service's module
  beforeEach(module('pokestackApp'));

  // instantiate service
  var analyticsService;
  beforeEach(inject(function (_analyticsService_) {
    analyticsService = _analyticsService_;
  }));

  it('should do something', function () {
    expect(!!analyticsService).toBe(true);
  });

});
