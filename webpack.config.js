var path    = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loaders: ['json'],
      exclude: /node_modules/
    }, {
      test: /\.scss?$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  }
};
