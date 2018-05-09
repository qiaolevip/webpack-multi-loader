const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/scripts/main.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      },
      {
        test: /\.s[ac]ss$/,
        loaders: ['style', 'css', 'sass?sourceMap', 'postcss']
      },
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus?sourceMap', 'postcss']
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.BannerPlugin('Copyright qiaole@vip.qq.com@Joe.'),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }),
    new ExtractTextPlugin('[name]-[hash].css')
  ]
};