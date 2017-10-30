const fs = require('fs')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const AppConfig = require('./app.config.js');

module.exports = (env = {}) => {
  let config = {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/public/index.hbs',
        filename: 'file-to-write-to.html'
      })
    ]
  };

  return config;
};

function getPages(AppConfig) {

}
