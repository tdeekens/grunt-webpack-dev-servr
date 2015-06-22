'use strict';

function Server(_Server, webpack) {
  this._Server = _Server;
  this._webpack = webpack;
  this._webpackServer = undefined;
}

Server.prototype.start = function(options, callback) {
  var _serverOptions = options.server();
  this._webpackServer = new this._Server(
    this._webpack(options.webpack()),
    _serverOptions.options
  );
  this._webpackServer.listen(_serverOptions.port, _serverOptions.host, function(err) {
    if (err) {
      throw err;
    }
  });
  this._webpackServer.on('webpackDevServer.started', function() {
    callback('webpackDevServer.started');
  });
};

Server.prototype.stop = function() {
  if (this._webpackServer) {
    this._webpackServer.close();
  }
};

module.exports = Server;
