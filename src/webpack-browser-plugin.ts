interface Defaults {
  port:number;
  browser:string
}

function mergeOptions(options:any, defaults:Defaults) {
  for (var key in defaults) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
}

export class WebpackShellPlugin {

  constructor(private options:any) {
    const defaultOptions:Defaults = {
      port: 8080,
      browser: 'default'
    };
    this.options = mergeOptions(options, defaultOptions);
  }

  apply(compiler:any) {
    if (compiler.options.port) {
      this.options.port = compiler.options.port;
    } else if (compiler.options.devServer.port) {
      this.options.port = compiler.options.devServer.port;
    }

    compiler.plugin('done', (compilation:any, callback:Function) => {
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
