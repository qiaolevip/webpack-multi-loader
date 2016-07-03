var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: './public',
  progress: true,
  hot: true,
  historyApiFallback: true,
  compress: true,
  quiet: false,
  noInfo: true,
  lazy: false,
  publicPath: '/dist/',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  headers: { 'X-Custom-Header': 'yes' },
  stats: { colors: true }
});
server.listen(1377, 'localhost', function() {});
console.log('Access http://localhost:1377/ to run you app');