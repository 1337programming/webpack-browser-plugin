[![npm version](https://badge.fury.io/js/webpack-browser-plugin.svg)](https://badge.fury.io/js/webpack-browser-plugin)
![](https://reposs.herokuapp.com/?path=1337programming/webpack-browser-plugin)
[![npm](https://img.shields.io/npm/dm/webpack-browser-plugin.svg)]()
# Webpack Browser Plugin

This plugin enables your webpack builds to automatically launch it's application on a browser.

Will automatically work for webpack-dev-server. For standard webpack usage -- browser sync is used to launch the application on a specific port.

## Installation

`npm install --save-dev webpack-browser-plugin`

## Setup
In `webpack.config.js`:

```js
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
  ...
  ...
  plugins: [
    new WebpackBrowserPlugin()
  ],
  ...
}
```



## Example

You can specify a port and a browser to be used.

```js
const WebpackBrowserPlugin = require('webpack-browser-plugin');

var plugins = [];

plugins.push(new WebpackBrowserPlugin({
  browser: 'Firefox',
  port: 9000,
  url: 'http://192.168.3.1'
}));

var config = {
  entry: {
    app: __dirname + 'src/pantera.js'
  },
  output: {
    path: __dirname + 'dest'
  },
  devServer: {
    contentBase: __dirname + 'dest'
  },
  plugins: plugins,
  module: {
    loaders: [
      {test: /\.js$/, loaders: 'babel'},
      {test: /\.scss$/, loader: 'style!css!scss?'},
      {test: /\.html$/, loader: 'html-loader'}
    ]
  }
}

module.exports = config;
```

Note: For `webpack`, `browser-sync` is being used. For `webpack-dev-server` a child process spawns the browser popup.
Also ports get overwritten if specified in webpack.config.js for webpack-dev-server.

### Other Webpack Plugins
Also checkout our other webpack plugin [WebpackShellPlugin](https://github.com/1337programming/webpack-shell-plugin).

### API
* `port`: Port to run on. **Default: 8080 <number>**
* `browser`: Browser to use. Note: webpack-dev-server will open your default browser. **Default: default <string|array>**
* `url`: Url to use. **Default: http://127.0.0.1 or http://localhost <string>**
* `publicPath`: Public url path. Note: this gets overridden by output.publicPath in your webpack.config. **Default: null**

**Webpack-dev-server** only
* `openOptions`: For webpack-dev-server, we use node module [opn](https://github.com/sindresorhus/opn). WARNING: This will override this plugin and webpack's configurations. **Default: null**

**Webpack** only
* `bsOptions`: Options to pass to the [browser-sync module](https://browsersync.io/docs/options). WARNING: This will override this plugin and webpack's configurations.  **Default: null**

### Contributing
Create a new branch and write your changes in the `src/` folder.

Make sure you run your tests with both `webpack` and `webpack-dev-server`. Or `npm run test` and `npm run test:dev`.

Once complete run `npm run build` and create your pull request.
