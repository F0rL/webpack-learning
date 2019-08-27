const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outputPath: "images/",
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    usedExports: true,
    //一般配置chunks all就可以了
    splitChunks: {
      //同步或者异步做分割
      chunks: "all"
      // //最小
      // minSize: 30000,
      // //最少使用次数
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // //组和文件之间连接符
      // automaticNameDelimiter: "~",
      // name: true,
      // //配合类似import _ from 'lodash'
      // cacheGroups: {
      //   //分组
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     //条件符合优先级
      //     priority: -10,
      //     //filename: 'vendors.js'
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     //已经被打包过了就忽略
      //     reuseExistingChunk: true,
      //     filename: 'common.js'
      //   }
      // }
    }
  }
};
