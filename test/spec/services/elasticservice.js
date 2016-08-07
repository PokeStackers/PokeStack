'use strict';

describe('Service: elasticservice', function () {

  // load the service's module
  beforeEach(module('pokestackApp'));

  // instantiate service
  var elasticservice;
  beforeEach(inject(function (_elasticservice_) {
    elasticservice = _elasticservice_;
  }));

  it('should do something', function () {
    expect(!!elasticservice).toBe(true);
  });

});
