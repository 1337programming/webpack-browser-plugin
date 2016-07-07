const path = require('path');
var WebpackBrowserPlugin = require('../lib');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    path: __dirname,
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