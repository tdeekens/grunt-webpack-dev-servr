'use strict';

function Server(options) {
  this._options = options;
}

Server.prototype.noop = function() {
  return true;
};

module.exports = Server;
