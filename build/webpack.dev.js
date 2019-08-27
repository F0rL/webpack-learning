const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: false,
    compress: true,
    port: 8080,
    hot: true
  }
};

module.exports = merge(commonConfig, devConfig)