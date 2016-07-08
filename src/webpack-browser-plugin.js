function mergeOptions(options, defaults) {
  for (var key in defaults) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
}

export default class WebpackBrowserPlugin {

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
    this.firstRun = true;
    this.watch = false;
    this.dev = null;
    this.outputPath = null;
  }

  apply(compiler) {
    if (compiler.options.port) {
      this.options.port = compiler.options.port;
    } else if (compiler.options.devServer) {
      if (compiler.options.devServer.port) {
        this.options.port = compiler.options.devServer.port;
      }
    }

    compiler.plugin('compilation', (compilation) => {
      if (compilation.options.watch) {
        this.watch = true;
      }
      if (compilation.compiler._plugins['watch-run']) {
        this.dev = true;
      } else {
        this.dev = false;
        this.outputPath = compilation.compiler.outputPath;
      }
    });

    compiler.plugin('done', (compilation) => {
      if (this.firstRun) {
        if (this.dev === true) {
          var spawn = require('child_process').spawn;
          spawn('open', [`http://127.0.01:${this.options.port.toString()}`]);
        } else if (this.dev === false) {
          const bs = require('browser-sync').create();

          if (this.watch) {
            bs.watch('*.js').on('change', bs.reload);
          }

          bs.watch(_this.outputPath + '/**/*.js', (event, file) => {
            if (event === "change") {
              bs.reload();
            }
          });

          bs.init({
            server: {
              baseDir: this.outputPath
            },
            browser: this.options.browser,
            port: this.options.port
          });
        } else {
          console.log('Failed Plugin: Webpack-Broswer-Plugin, incorrect params found.');
        }
        this.firstRun = false;
      }
    });
  }
}
