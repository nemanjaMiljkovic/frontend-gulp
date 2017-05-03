const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './app/assets/js/index.js',
    vendors: ['animejs'],
  },
  output: {
    path: path.join(__dirname, 'app', 'temp', 'js'),
    filename: '[name].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { modules: false }]
            ]
          }
        }
      },
    ]
  },
  plugins: [
  ],
}
