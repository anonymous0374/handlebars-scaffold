const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');

module.exports = (env = {}) => {
  let config = merge(common(env), {
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: { // this is for webpack-dev-server
      contentBase: './dist',
      hot: true,
      port: 3000
    }
  });

  return config;
}
