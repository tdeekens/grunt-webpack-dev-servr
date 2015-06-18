'use strict';

var expect = require('chai').expect,
    Config = require('../../tasks/config'),
    config;

describe('Config', function() {

  it('should offer a webpack config', function() {
    config = new Config({});

    expect(config.webpack()).is.a('object');
  });

  it('should load a webpack config', function() {
    config = new Config({
      config: '../fixtures/basic.js'
    });

    expect(config.webpack()).to.deep.equal({a: 1});
  });
});
