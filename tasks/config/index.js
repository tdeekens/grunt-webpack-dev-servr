'use strict';

function Config(config) {
  if (config.config) {
    this._config = require(config.config);
  } else {
    this._config = config;
  }
}

Config.prototype.webpack = function() {
  return this._config;
};

module.exports = Config;
