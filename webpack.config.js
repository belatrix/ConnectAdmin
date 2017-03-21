var isProd = (process.env.NODE_ENV === 'production');

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var cssFilename = 'css/main.min.css';

function resolveApp(relativePath) {
  return path.resolve(__dirname, relativePath);
}

var paths = {
  appIndexJs: resolveApp('src/js/index.js'),
  appSrc: resolveApp('src/js'),
  appContext: resolveApp('src'),
  appBuild: resolveApp('build'),
}

module.exports = {
  context: __dirname + "/src",
  devtool: isProd ? 'source-map' : 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    paths.appIndexJs
  ],
  module: {
    loaders: [{
      exclude: [
        /\.html$/,
        /\.(js|jsx)$/,
        /\.css$/,
        /\.json$/,
        /\.svg$/,
        /\.sass$/,
        /\.scss$/,
        /node_modules/
      ],
      loader: 'url',
      query: {
        limit: 10000,
        name: 'build/media/[name].[ext]'
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot'],
      include: paths.appContext
    }, {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties',
          'transform-decorators-legacy'
        ]
      },
      include: paths.appContext
    }, {
      test: /\.scss$/,
      loader: isProd ? ExtractTextPlugin.extract('style',
        'css?importLoaders=1!sass!postcss') : "style!css!sass!postcss"
    }]
  },
  output: {
    path: paths.appBuild,
    filename: "js/build.min.js"
  },
  // We use PostCSS for autoprefixing only.
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: !isProd ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ] : [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // This helps ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Try to dedupe duplicated modules, if any:
    new webpack.optimize.DedupePlugin(),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin(cssFilename)
  ],
  devServer: {
    hot: true,
    contentBase: './src',
    // proxy: {
    //   "/api/*": "http://localhost:3000"
    // }
  }
};
