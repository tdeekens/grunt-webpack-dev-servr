/*
* grunt-webpack-dev-server
* https://github.com/tdeekens/grunt-webpack-dev-server
*
* Copyright (c) 2015 E-POST Development GmbH
* Licensed under the BSD license.
*/

'use strict';

module.exports = function(grunt) {
  var
    Server = require('./server');

  grunt.registerTask('webpack-dev-server', 'A grunt task to start a webpack-dev-server.', function() {
    //Grunt related initialization
    var
      options = this.options({}),
      server = new Server(options),
      done = this.async();

    server.noop();

    done();
  });
};
