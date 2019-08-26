//node path
const path = require("path");
//自动生成html并引入js
const HtmlWebpackPlugin = require("html-webpack-plugin");
//每次打包删除旧目录
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  mode: "development",
  //查错工具
  // 建议：
  // dev: cheap-module-eval-source-map
  // pro: cheap-module-source-map
  devtool: "cheap-module-eval-source-map",
  //多入口
  entry: {
    app: "./src/main.js"
    //sub: "./src/main.js"
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
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            //importLoaders: @import引入的css需要使用后面几个loader，1-sass-loader,2-postcss-loader
            //modules: css在模块内有效
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    //设置html模板
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    //删除文件
    new CleanWebpackPlugin(),
    //配合 devServer webpack热更新HMR
    //文档 https://webpack.docschina.org/guides/hot-module-replacement/
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    //如果要将输出文件放在专门的cdn上，需要配置publicPath
    //publicPath: 'http://cdn.com.cn',
    path: path.resolve(__dirname, "dist"),
    //[name]占位
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    //自动打开
    open: false,
    //代码gzip 压缩
    compress: true,
    //端口
    port: 8080,
    //启用 webpack 的模块热替换特性
    hot: true,
    //模块热替换不刷新页面,例如只改变css/js而不刷新页面
    hotOnly: true
  }
};


  // babel 业务代码直接配置，需要在文件顶端import "@babel/polyfill";
  // "presets": [
  //   [
  //     "@babel/preset-env",
  //     {
  //       "targets": {
  //         "edge": "17",
  //         "firefox": "60",
  //         "chrome": "67",
  //         "safari": "11.1"
  //       },
  //       "useBuiltIns": "usage"
  //     }
  //   ]
  // ]
  // 如果写的是库，使用配置插件，不污染全局
  // "plugins": [
  //   [
  //     "@babel/plugin-transform-runtime",
  //     {
  //       "corejs": 2,
  //       "helpers": true,
  //       "regenerator": true,
  //       "useESModules": false
  //     }
  //   ]
  // ]