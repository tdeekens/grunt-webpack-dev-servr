/*
* grunt-webpack-dev-server
* https://github.com/tdeekens/grunt-webpack-dev-server
*
* Copyright (c) 2015 E-POST Development GmbH
* Licensed under the BSD license.
*/

'use strict';

var webpackServer = require('webpack-dev-server-cors'),
    webpack = require('webpack'),
    Config = require('./config'),
    Server = require('./server');

module.exports = function(grunt) {

  grunt.registerMultiTask('webpack-dev-server', 'A grunt task to start a webpack-dev-server.', function() {
    var options = new Config(this.options({})),
        server = new Server(webpackServer, webpack),
        done;

    done = this.async();

    server.start(options, function(event) {
      if (event === 'webpackDevServer.started' && !options.keepAlive) {
        done();
      }
    });
  });
};
