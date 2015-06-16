# grunt-webpack-dev-server

**Note: This grunt plugin is under current development and not ready for use just now!**

> A grunt task to start a webpack-dev-server.

[![NPM](https://nodei.co/npm/grunt-webpack-dev-server.png?mini=true)](https://nodei.co/npm/grunt-webpack-dev-server/)

[![Build Status](https://travis-ci.org/tdeekens/grunt-licensy.svg?branch=master)](https://travis-ci.org/tdeekens/grunt-webpack-dev-server)
[![Coverage Status](https://coveralls.io/repos/tdeekens/grunt-licensy/badge.png)](https://coveralls.io/r/tdeekens/grunt-webpack-dev-server)
[![Dependency Status](https://david-dm.org/tdeekens/grunt-licensy.svg?style=flat)](https://david-dm.org/tdeekens/grunt-webpack-dev-server)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-webpack-dev-server --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-webpack-dev-server');
```

## The "webpack-dev-server" task

### Overview
In your project's Gruntfile, the `webpack-dev-server` task is available to use.

You can run `grunt webpack-dev-server` standalone
Or add it to an existing task: `grunt.registerTask('test', ['clean', 'webpack-dev-server']);`

### Options

```javascript
{
}
```

An example configuration can be found [here](https://github.com/tdeekens/grunt-webpack-dev-server/blob/master/grunt/tasks/webpack-dev-server.js) and if you want to check the options you might want to check the [Gruntfile](https://github.com/tdeekens/grunt-webpack-dev-server/blob/master/tasks/webpack-dev-server.js) itself.
An example output on the other hand is [here](https://github.com/tdeekens/grunt-webpack-dev-server/blob/master/dist/webpack-dev-server.json).

## Developing & Contributing

Developing on the task alone is fairly easy just `git clone https://github.com/tdeekens/grunt-webpack-dev-server.git` then `cd grunt-webpack-dev-server`. From there one has to link the package to itself via `npm link && npm link grunt-webpack-dev-server` which will allow for calling `grunt dev`. Now just work the `task/webpack-dev-server.js` and check results - feel free to submit a pull-request!

## Release History
- 0.0.0 Development version without release
