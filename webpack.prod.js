const merge = require('webpack-merge'),
      dev = require('./webpack.dev'),
      webpack = require('webpack'),
      path = require('path');

module.exports = merge(dev, {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: './app/assets/js/index.js',
    vendors: [],
  },
  output: {
    path: path.join(__dirname, 'app', 'dist', 'js'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest'],
    })
  ],
});
