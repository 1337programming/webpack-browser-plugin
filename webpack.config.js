const path = require('path');
const webpack = require('webpack');

var WebpackBrowserPlugin = require('./lib');

module.exports = {
  entry: path.resolve(__dirname, 'test/assets/entry.js'),
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'test')
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new WebpackBrowserPlugin({
      port: null,
      publicPath: '/',
      browser: 'default',
      url: 'localhost:8080',
      openOptions: null,
      bsOptions: null
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
