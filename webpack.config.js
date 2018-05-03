const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');

const srcPath = path.resolve('src');
const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const config = {
  host: '0.0.0.0',
  port: 1337,
  htmlInfo: {
    index: {
      title: '主页面',
      meta: {
        description: '这是主页面入口'
      }
    },
    login: {
      title: '登录页',
      meta: {
        description: '这是登录页入口'
      }
    }
  }
};

const entries = {};
const extraPlugin = [];
const htmlInfo = config.htmlInfo;
const dirPath = `${srcPath}/*.{js,jsx}`;
glob.sync(dirPath).forEach(function(v) {
  const filename = v.substring(v.lastIndexOf('/') + 1, v.lastIndexOf('.'));
  entries[filename] = `${srcPath}/${filename}.js`;

  const htmlConf = htmlInfo[filename] || {};
  htmlConf.template = `${srcPath}/template.html`;
  htmlConf.filename = `${filename}.html`;
  htmlConf.chunks = [filename];
  htmlConf.favicon = `${srcPath}/favicon.ico`;
  extraPlugin.push(new HtmlWebpackPlugin(htmlConf));
});
if (isProd) {
  extraPlugin.push(new UglifyJsPlugin({
    uglifyOptions: {
      ecma: 8,
      warnings: false,
    }
  }));
  extraPlugin.push(new webpack.optimize.ModuleConcatenationPlugin());
  extraPlugin.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = {
  mode: env,
  entry: entries,
  output: {
    path: path.resolve('dist'),
    // publicPath: '/static/',
    filename: 'js/[name].[hash:4].js'
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: isProd,
              // sourceMap: isProd
            }
          }, 'postcss-loader', 'stylus-loader'],
          publicPath: '../'
        })
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
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      },
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      srcPath
    ],
    extensions: ['.js', '.json', '.jsx', '.styl'],
  },
  plugins: [
    // new DashboardPlugin({ host: config.host, port: config.port }),
    new CleanWebpackPlugin('dist'),
    new webpack.BannerPlugin('Copyright qiaole@vip.qq.com@Joe.'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new ExtractTextPlugin('css/[name].[hash:4].css')
  ].concat(extraPlugin),
  devServer: {
    contentBase: 'dist',
    compress: true,
    hot: true,
    inline: true,
    host: config.host,
    port: config.port
  }
};
