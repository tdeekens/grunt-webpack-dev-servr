'use strict';

var expect = require('chai').expect,
    Config = require('../../tasks/config'),
    config;

describe('Configuration', function() {

  describe('the webpack part', function() {

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

  describe('the server part', function() {

    it('should offer a server config', function() {
      config = new Config({});

      expect(config.server()).is.a('object');
    });

    it('should provide a host parameter', function() {
      config = new Config({
        host: 'x'
      });

      expect(config.server().host).to.equal('x');
    });

    it('should provide a port parameter', function() {
      config = new Config({
        port: 80
      });

      expect(config.server().port).to.equal(80);
    });

  });
});
