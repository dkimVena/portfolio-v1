const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'module', 'main'],
    alias: {
      components: path.resolve('./src/components'),
    },
  },

  plugins:
    process.argv.indexOf('-p') === -1
      ? []
      : [
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,
          },
        }),
      ],
};
