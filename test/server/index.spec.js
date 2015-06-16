var
  expect = require('chai').expect;

var
  Server = require('../../tasks/server'),
  server;

describe('Server specification', function() {
  beforeEach(function() {
    server = new Server();
  });

  it('should ensure that something truethy is meant to be true', function() {
    expect(+[]).to.equal(0);
  });
});
