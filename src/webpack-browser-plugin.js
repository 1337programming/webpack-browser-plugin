function mergeOptions(options, defaults) {
  for (var key in defaults) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
}

export default class WebpackShellPlugin {

  constructor(options) {
    const defaultOptions = {
      port: 8080,
      browser: 'default'
    };
    if (options) {
      this.options = mergeOptions(options, defaultOptions);
    } else {
      this.options = defaultOptions;
    }
  }

  apply(compiler) {
    if (compiler.options.port) {
      this.options.port = compiler.options.port;
    } else if (compiler.options.devServer.port) {
      this.options.port = compiler.options.devServer.port;
    }

    compiler.plugin('emit', (compilation, callback) => {
      if (compilation.compiler._plugins['watch-run']) {
        // Running in dev-server @todo check and validate this
        const open = require('open');
        if (this.options.browser !== 'default') {
          open(`http://127.0.0.1:${this.options.port.toString()}/`);
        } else {
          open(`http://127.0.0.1:${this.options.port.toString()}/`, this.options.browser);
        }
      } else {
        const browserSync = require('browser-sync');
        browserSync.init({
          server: {
            baseDir: compilation.options.output.path,
            browser: this.options.browser,
            port: this.options.port
          }
        });
      }
      callback();
    });
  }
}
