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
  port: 9000
}));

var config = {
  entry: {
    app: __dirname + 'src/pantera.js'
  },
  output: {
    path: __dirname + 'dest'
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
* `browser`: Browser to use. **Default: default <string|array>**
