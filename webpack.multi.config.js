const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcPath = path.resolve('src');

module.exports = {
  mode: 'development',
  entry: {
    index: `${srcPath}/index.js`,
    login: `${srcPath}/login.js`,
  },
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].[hash:4].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader'])
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new ExtractTextPlugin('css/[name].[hash:4].css'),
    new HtmlWebpackPlugin({
      title: '主页面',
      template: `${srcPath}/template.html`,
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: '登录面',
      template: `${srcPath}/template.html`,
      filename: 'login.html',
      chunks: ['login']
    }),
  ]
};
