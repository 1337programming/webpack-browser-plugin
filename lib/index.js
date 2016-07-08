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

var WebpackBrowserPlugin = function () {
  function WebpackBrowserPlugin(options) {
    babelHelpers.classCallCheck(this, WebpackBrowserPlugin);

    var defaultOptions = {
      port: 8080,
      browser: 'default'
    };
    if (options) {
      this.options = mergeOptions(options, defaultOptions);
    } else {
      this.options = defaultOptions;
    }
    this.firstRun = true;
    this.watch = false;
    this.dev = null;
    this.outputPath = null;
  }

  babelHelpers.createClass(WebpackBrowserPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this2 = this;

      if (compiler.options.port) {
        this.options.port = compiler.options.port;
      } else if (compiler.options.devServer) {
        if (compiler.options.devServer.port) {
          this.options.port = compiler.options.devServer.port;
        }
      }

      compiler.plugin('compilation', function (compilation) {
        if (compilation.options.watch) {
          _this2.watch = true;
        }
        if (compilation.compiler._plugins['watch-run']) {
          _this2.dev = true;
        } else {
          _this2.dev = false;
          _this2.outputPath = compilation.compiler.outputPath;
        }
      });

      compiler.plugin('done', function (compilation) {
        if (_this2.firstRun) {
          if (_this2.dev === true) {
            var spawn = require('child_process').spawn;
            spawn('open', ['http://127.0.01:' + _this2.options.port.toString()]);
          } else if (_this2.dev === false) {
            (function () {
              var bs = require('browser-sync').create();

              if (_this2.watch) {
                bs.watch('*.js').on('change', bs.reload);
              }

              bs.watch(_this.outputPath + '/**/*.js', function (event, file) {
                if (event === "change") {
                  bs.reload();
                }
              });

              bs.init({
                server: {
                  baseDir: _this2.outputPath
                },
                browser: _this2.options.browser,
                port: _this2.options.port
              });
            })();
          } else {
            console.log('Failed Plugin: Webpack-Broswer-Plugin, incorrect params found.');
          }
          _this2.firstRun = false;
        }
      });
    }
  }]);
  return WebpackBrowserPlugin;
}();

module.exports = WebpackBrowserPlugin;