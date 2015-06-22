'use strict';

var expect = require('chai').expect,
    sinon = require('sinon'),
    Server = require('../../tasks/server'),
    close,
    listen,
    options,
    webpack,
    webpackServer,
    server;

describe('Server', function() {

  beforeEach(function() {
    options = {
      webpack: sinon.stub(),
      server: sinon.stub()
    };
    listen = sinon.spy();
    close = sinon.spy();
    webpack = sinon.stub();
    webpackServer = sinon.stub();
    webpackServer.returns({listen: listen, close: close});
  });

  it('should create a webpack object using webpack options', function() {

    options.server.returns({});
    options.webpack.returns({a: 1});

    server = new Server(webpackServer, webpack);
    server.start(options);
    expect(webpack.callCount).to.equal(1);
    expect(webpack.firstCall.calledWith({a: 1})).to.be.ok;
  });

  it('should create a server object using webpack and options', function() {
    options.server.returns({options: 'OPTIONS'});

    webpack.returns('WEBPACK');

    server = new Server(webpackServer, webpack);
    server.start(options);

    expect(webpackServer.callCount).to.equal(1);
    expect(webpackServer.firstCall.calledWith('WEBPACK', 'OPTIONS')).to.be.ok;
  });

  it('should listen to the given host and port', function() {
    options.server.returns({host: 'HOST', port: 'PORT'});

    server = new Server(webpackServer, webpack);
    server.start(options);

    expect(listen.callCount).to.equal(1);
    expect(listen.firstCall.calledWith('PORT', 'HOST')).to.be.ok;
  });

  it('should provide a call to stop the server', function() {
    options.server.returns({});

    server = new Server(webpackServer, webpack);
    server.start(options);
    server.stop();

    expect(close.callCount).to.equal(1);
  });


  it('should not stop the server if it was not started before', function() {
    options.server.returns({});

    server = new Server(webpackServer, webpack);
    server.stop();

    expect(close.callCount).to.equal(0);
  });
});
