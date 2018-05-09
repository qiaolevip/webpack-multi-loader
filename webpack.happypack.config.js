const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: 5});
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const CompressionPlugin = require('compression-webpack-plugin');
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
      },
      // chunks: ['vendor']
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
let extraPlugin = [];
const htmlInfo = config.htmlInfo;
const dirPath = `${srcPath}/*.{js,jsx}`;
glob.sync(dirPath).forEach(function (v) {
  const filename = v.substring(v.lastIndexOf('/') + 1, v.lastIndexOf('.'));
  entries[filename] = `${srcPath}/${filename}.js`;

  const htmlConf = htmlInfo[filename] || {};
  htmlConf.template = `${srcPath}/template.html`;
  htmlConf.filename = `${filename}.html`;
  htmlConf.favicon = `${srcPath}/favicon.ico`;
  htmlConf.chunks = htmlConf.chunks || [];
  htmlConf.chunks = [...htmlConf.chunks, filename];
  htmlConf.minify = {
    removeComments: isProd,
    collapseWhitespace: isProd,
    removeAttributeQuotes: isProd
  };
  extraPlugin.push(new HtmlWebpackPlugin(htmlConf));
});
let envPlugin = [];
if (isProd) {
  envPlugin = [
    // new BundleAnalyzerPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 6,
        warnings: false,
        toplevel: true,
        output: {
          comments: false,
          beautify: false,
        },
      }
    }),
    /*new CompressionPlugin({
     asset: '[path].gz[query]',
     algorithm: 'gzip',
     test: /\.js$|\.css$|\.html$/,
     threshold: 10240,
     minRatio: 0.8
     }),*/
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.AggressiveSplittingPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ];
} else {
  envPlugin = [
    new webpack.NamedModulesPlugin()
  ];
}
extraPlugin = [...extraPlugin, ...envPlugin];

module.exports = {
  mode: env,
  devtool: isProd ? 'source-map' : 'eval',
  entry: entries,
  output: {
    path: path.resolve('dist'),
    // publicPath: isProd ? '/' : '',
    filename: `js/[name]${isProd ? '.[hash:7]' : ''}.js`,
    // chunkFilename: isProd ? 'js/[id].[hash:7].js' : 'js/[id].js'
  },
  resolve: {
    modules: [
      'node_modules',
      srcPath
    ],
    extensions: ['.js', '.jsx', '.json', '.styl'],
    symlinks: false
  },
  /*optimization: {
   splitChunks: {
   cacheGroups: {
   vendor: {
   test: /node_modules/,
   chunks: 'initial',
   name: 'vendor',
   priority: 10
   }
   }
   }
   },*/
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'happypack/loader?id=js',
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: 'happypack/loader?id=styles',
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
  plugins: [
    // new DashboardPlugin({ host: config.host, port: config.port }),
    new webpack.BannerPlugin('Copyright qiaole@vip.qq.com@Joe.'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'styles',
      threadPool: happyThreadPool,
      loaders: [{
        loader: 'css-loader',
        options: {
          minimize: isProd,
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, 'stylus-loader']
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/library/manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new ExtractTextPlugin(`css/[name]${isProd ? '.[hash:7]' : ''}.css`)
  ].concat(extraPlugin),
  devServer: {
    contentBase: 'dist',
    compress: true,
    hot: true,
    inline: true,
    progress: true,
    // https: true,
    // noInfo: true,
    // open: true,
    // openPage: '/different/page'
    host: config.host,
    port: config.port,
    headers: {
      'X-Powered-By': '@Joe <qiaole@vip.qq.com>'
    },
    before(app){
      app.get('/api/get', function (req, res) {
        res.json({custom: 'response'});
      });
    }
  }
};
