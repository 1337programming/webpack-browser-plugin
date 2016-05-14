'use strict';

var babelHelpers = {};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

babelHelpers;

function mergeOptions(options, defaults) {
  for (var key in defaults) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
}

var WebpackShellPlugin = function () {
  function WebpackShellPlugin(options) {
    babelHelpers.classCallCheck(this, WebpackShellPlugin);

    var defaultOptions = {
      port: 8080,
      browser: 'default',
      url: 'http://127.0.0.1'
    };
    if (options) {
      this.options = mergeOptions(options, defaultOptions);
    } else {
      this.options = defaultOptions;
    }
    this.firstRun = true;
    this.dev = null;
    this.outputPath = null;
  }

  babelHelpers.createClass(WebpackShellPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      if (compiler.options.port) {
        this.options.port = compiler.options.port;
      } else if (compiler.options.devServer) {
        if (compiler.options.devServer.port) {
          this.options.port = compiler.options.devServer.port;
        }
      }

      compiler.plugin('compilation', function (compilation) {
        if (compilation.compiler._plugins['watch-run']) {
          _this.dev = true;
        } else {
          _this.dev = false;
          _this.outputPath = compilation.compiler.outputPath;
        }
      });

      compiler.plugin('done', function (compilation) {
        if (_this.firstRun) {
          if (_this.dev === true) {
            // Running in dev-server @todo check and validate this
            var open = require('open');
            open(_this.options.url + ':' + _this.options.port.toString() + '/');
          } else if (_this.dev === false) {
            var browserSync = require('browser-sync');
            browserSync.init({
              server: {
                baseDir: _this.outputPath
              },
              browser: _this.options.browser,
              port: _this.options.port,
              url: _this.options.url
            });
          } else {
            console.log('Failed Plugin: Webpack-Broswer-Plugin, incorrect params found.');
          }
          _this.firstRun = false;
        }
      });
    }
  }]);
  return WebpackShellPlugin;
}();

module.exports = WebpackShellPlugin;