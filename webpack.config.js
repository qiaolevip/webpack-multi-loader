const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: './app/scripts/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    /*new webpack.optimize.UglifyJsPlugin({
     compress: {
     warnings: false
     },
     output: {
     comments: false
     }
     })*/
  ]
};