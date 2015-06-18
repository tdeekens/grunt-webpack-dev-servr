'use strict';

function Config(config) {
  this._config = {
    server: {}
  };
  if (config.config) {
    this._config.webpack = require(config.config);
  } else {
    this._config.webpack = config;
  }
  this._config.server.host = config.host || 'localhost';
  this._config.server.port = config.port || 8080;
}

Config.prototype.webpack = function() {
  return this._config.webpack;
};

Config.prototype.server = function() {
  return this._config.server;
};

module.exports = Config;
