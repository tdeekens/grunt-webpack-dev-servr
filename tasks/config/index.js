'use strict';

var path = require('path');

function merge(base, override) {
  var property;

  for (property in override) {
    if (override.hasOwnProperty(property)) {
      try {
        if (override[property].constructor === Object) {
          base[property] = merge(base[property], override[property]);
        } else if (override[property].constructor === Array) {
          base[property] = override[property].concat(base[property]);
        } else if (base[property].constructor === Array) {
          base[property] = base[property].concat(override[property]);
        } else {
          base[property] = override[property];
        }
      } catch (e) {
        base[property] = override[property];
      }
    }
  }

  return base;
}

function Config(config) {
  this._config = {
    server: {}
  };
  if (config.config) {
    this._config.webpack = require(path.resolve(config.config));
  } else {
    this._config.webpack = config;
  }

  if (config.webpack) {
    this._config.webpack = merge(this._config.webpack, config.webpack);
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
