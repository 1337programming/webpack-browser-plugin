'use strict';

function mergeOptions(options, defaults) {
    for (var key in defaults) {
        if (options.hasOwnProperty(key)) {
            defaults[key] = options[key];
        }
    }
    return defaults;
}
var WebpackShellPlugin = (function () {
    function WebpackShellPlugin(options) {
        this.options = options;
        var defaultOptions = {
            port: 8080,
            browser: 'default'
        };
        this.options = mergeOptions(options, defaultOptions);
    }
    WebpackShellPlugin.prototype.apply = function (compiler) {
        var _this = this;
        if (compiler.options.port) {
            this.options.port = compiler.options.port;
        }
        else if (compiler.options.devServer.port) {
            this.options.port = compiler.options.devServer.port;
        }
        compiler.plugin('done', function (compilation, callback) {
            if (compilation.compiler._plugins['watch-run']) {
                // Running in dev-server @todo check and validate this
                var open = require('open');
                if (_this.options.browser !== 'default') {
                    open("http://127.0.0.1:" + _this.options.port.toString() + "/");
                }
                else {
                    open("http://127.0.0.1:" + _this.options.port.toString() + "/", _this.options.browser);
                }
            }
            else {
                var browserSync = require('browser-sync');
                browserSync.init({
                    server: {
                        baseDir: compilation.options.output.path,
                        browser: _this.options.browser,
                        port: _this.options.port
                    }
                });
            }
            callback();
        });
    };
    return WebpackShellPlugin;
}());

exports.WebpackShellPlugin = WebpackShellPlugin;