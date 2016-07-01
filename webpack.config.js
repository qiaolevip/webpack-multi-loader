const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',

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
        loader: 'style!css?modules!postcss'
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
  /*plugins: [
    new webpack.BannerPlugin("Copyright qiaole@vip.qq.com@Joe."),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ],*/

  /*devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }*/
};