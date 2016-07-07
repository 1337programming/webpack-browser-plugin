const path = require('path');
var WebpackBrowserPlugin = require('./lib');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'test/entry.js'),
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new WebpackBrowserPlugin()
  ]
};