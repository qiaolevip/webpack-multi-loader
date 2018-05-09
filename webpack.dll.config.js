const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  context: process.cwd(),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.styl'],
    modules: [__dirname, 'node_modules']
  },
  entry: {
    library: [
      'react',
      'react-dom',
      'mobx',
      'mobx-react',
    ],
  },
  output: {
    path: path.resolve('./dist/library'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new webpack.DllPlugin({
      path: './dist/library/manifest.json',
      name: '[name]',
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 6,
        warnings: false,
        output: {
          comments: false,
          beautify: false,
        },
      }
    }),
  ]
};