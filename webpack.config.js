const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: './app/scripts/main.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'main.bundle.js'
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
        loader: 'style!css?modules!postcss'
      },
      {
        test: /\.s[ac]ss$/,
        loaders: ['style', 'css', 'sass?sourceMap', 'postcss']
      },
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus?sourceMap']
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.BannerPlugin('Copyright qiaole@vip.qq.com@Joe.'),

    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),

    new webpack.HotModuleReplacementPlugin(),

    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })*/
  ],

  /*devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }*/
};