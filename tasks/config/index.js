'use strict';

var path = require('path');

function Config(config) {
  this._config = {
    server: {}
  };
  if (config.config) {
    this._config.webpack = require(path.resolve(config.config));
  } else {
    this._config.webpack = config;
  }

  if (this._config.webpack.output) {
    this._config.webpack.output.path = '/';
  }

  this._config.server.host = config.host || 'localhost';
  this._config.server.port = config.port || 8080;

  this.keepAlive = !!config.keepAlive;
}

Config.prototype.webpack = function() {
  return this._config.webpack;
};

Config.prototype.server = function() {
  return this._config.server;
};

module.exports = Config;
