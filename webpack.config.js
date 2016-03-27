var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');
var lost = require('lost');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/script.js",
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test : /\.scss$/,
        loader : 'style-loader!css-loader!sass-loader?sourceMaps!postcss-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "script.min.js"
  },

  postcss: function () {
    return {
        defaults: [autoprefixer, cssnext, lost],
        cleaner:  [autoprefixer({ browsers: [] })]
    };
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
