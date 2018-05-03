const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        test:/\.jsx?$/,
        use: 'babel-loader',
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              limit: 10240,
              outputPath: 'images/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:4].css'
    }),
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
  ],
};
