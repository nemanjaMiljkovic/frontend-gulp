const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './app/assets/js/index.js'
  },
  output: {
    path: path.join(__dirname, 'app', 'temp', 'js'),
    filename: 'bundle.js',
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
