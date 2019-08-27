const merge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    //new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: false
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader}, 
          "css-loader", 
          "postcss-loader"
        ]
      },
    ]
  }
};

module.exports = merge(commonConfig, prodConfig)