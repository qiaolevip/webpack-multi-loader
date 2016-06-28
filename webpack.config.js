const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './app/scripts/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
