# grunt-webpack-dev-servr

> A grunt task to start a webpack-dev-server.

> Why this task is needed...

> This task depends on a special fork of the webpack-dev-server to ensure that a subsequent task only starts whenever the server is up and running. This is particularly useful for E2E testing in which e.g. an Protractor run needs the server running.

[![Build Status](https://travis-ci.org/tdeekens/grunt-licensy.svg?branch=master)](https://travis-ci.org/tdeekens/grunt-webpack-dev-servr)
[![Coverage Status](https://coveralls.io/repos/tdeekens/grunt-licensy/badge.png)](https://coveralls.io/r/tdeekens/grunt-webpack-dev-servr)
[![Dependency Status](https://david-dm.org/tdeekens/grunt-licensy.svg?style=flat)](https://david-dm.org/tdeekens/grunt-webpack-dev-servr)

[![NPM](https://nodei.co/npm/grunt-webpack-dev-servr.png)](https://nodei.co/npm/grunt-webpack-dev-servr/)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-webpack-dev-servr --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-webpack-dev-servr');
```

## The "webpack-dev-servr" task

### Overview
In your project's Gruntfile, the `webpack-dev-server` task is available to use.

You can run `grunt webpack-dev-server` standalone
Or add it to an existing task: `grunt.registerTask('test', ['clean', 'webpack-dev-server']);`

### Options

[Please refer to the standard webpack-dev-server options...](http://webpack.github.io/docs/webpack-dev-server.html#api)

```javascript
{
  // Any configuration the webpack-dev-server itself supports.
}
```

An example configuration can be found [here](https://github.com/tdeekens/grunt-webpack-dev-servr/blob/master/grunt/tasks/webpack-dev-server.js) and if you want to check the options you might want to check the [Gruntfile](https://github.com/tdeekens/grunt-webpack-dev-servr/blob/master/tasks/webpack-dev-server.js) itself.
An example output on the other hand is [here](https://github.com/tdeekens/grunt-webpack-dev-servr/blob/master/dist/webpack-dev-server.json).

## Developing & Contributing

Developing on the task alone is fairly easy just `git clone https://github.com/tdeekens/grunt-webpack-dev-servr.git` then `cd grunt-webpack-dev-servr`. From there one has to link the package to itself via `npm link && npm link grunt-webpack-dev-servr` which will allow for calling `grunt dev`. Now just work the `task/webpack-dev-server.js` and check results - feel free to submit a pull-request!

## Release History
- 0.0.0 Development version without release
- 0.1.0 Initial release
- 0.1.1
- 0.1.2 Prevent `started`-Event being fired twice
