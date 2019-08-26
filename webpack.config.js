//node path
const path = require("path");
//自动生成html并引入js
const HtmlWebpackPlugin = require("html-webpack-plugin");
//每次打包删除旧目录
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  //多入口
  entry: {
    app: "./src/main.js",
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
              importLoaders: 2
              //modules: true
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    //如果要将输出文件放在专门的cdn上，需要配置publicPath
    //publicPath: 'http://cdn.com.cn',
    path: path.resolve(__dirname, "dist"),
      //[name]占位
    filename: "[name].js"
  }
};
