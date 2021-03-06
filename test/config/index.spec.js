'use strict';

var expect = require('chai').expect,
    Config = require('../../tasks/config'),
    config;

describe('Configuration', function() {

  describe('the generic part', function() {
    it('should transport the keepAlive option', function() {
      config = new Config({keepAlive: true});

      expect(config.keepAlive).to.equal(true);
    });

    it('should default the keepAlive option to false', function() {
      config = new Config({});

      expect(config.keepAlive).to.equal(false);
    });
  });

  describe('the webpack part', function() {

    it('should offer a webpack config', function() {
      config = new Config({});

      expect(config.webpack()).is.a('object');
    });

    it('should load a webpack config', function() {
      config = new Config({
        config: 'test/fixtures/basic.js'
      });

      expect(config.webpack()).to.deep.equal({a: 1});
    });

    it('should reset the output path', function() {
      config = new Config({
        output: {path: 'x'}
      });

      expect(config.webpack().output.path).to.equal('/');
    });

    it('should merge a base webpack config with overrides', function() {
      config = new Config(
        {
          a: 'a',
          webpack: {
            a: 'b'
          }
        }
      );

      expect(config.webpack().a).to.equal('b');
    });

    it('should merge a base webpack config array with override array', function() {
      config = new Config(
        {
          a: ['a'],
          webpack: {
            a: ['b']
          }
        }
      );

      expect(config.webpack().a).to.deep.equal(['b', 'a']);
    });

    it('should merge a base webpack config with override array', function() {
      config = new Config(
        {
          a: 'a',
          webpack: {
            a: ['b']
          }
        }
      );

      expect(config.webpack().a).to.deep.equal(['b', 'a']);
    });

    it('should merge a base webpack config array with an override value', function() {
      config = new Config(
        {
          a: ['a'],
          webpack: {
            a: 'b'
          }
        }
      );

      expect(config.webpack().a).to.deep.equal(['a', 'b']);
    });

    it('should merge a base webpack config object with an override object', function() {
      config = new Config(
        {
          a: {
            a: 'a'
          },
          webpack: {
            a: {
              b: 'b'
            }
          }
        }
      );

      expect(config.webpack().a).to.deep.equal({a: 'a', b: 'b'});
    });

    it('should recursively merge a base webpack config object with an override object', function() {
      config = new Config(
        {
          a: {
            a: 'a'
          },
          webpack: {
            a: {
              a: 'b'
            }
          }
        }
      );

      expect(config.webpack().a).to.deep.equal({a: 'b'});
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
