'use strict';

function Server(_Server, webpack) {
  this._Server = _Server;
  this._webpack = webpack;
}

Server.prototype.start = function(options) {
  var _serverOptions = options.server(),
      server = new this._Server(
        this._webpack(options.webpack()),
        _serverOptions.options
      );
  server.listen(_serverOptions.port, _serverOptions.host, function(err) {
    if (err) {
      throw err;
    }
  });

  return server;
};

module.exports = Server;
