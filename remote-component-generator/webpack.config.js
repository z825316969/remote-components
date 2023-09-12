const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  devServer : {  // 
    host : 'localhost', // 服务启动的 ip 地址 localhost 即本地
    port : '2899', // 开启的端口
    open : true, // 是否开启服务后 打开浏览器
    static: "./"
  },
  // entry: process.env.NODE_ENV === 'production' ? "./src/index.jsx" : "./src/app.jsx",
  entry: "./src/index.jsx",
  mode: "production",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'amd-require', // amd模式打包，立即执行
    },
  },
  externals: {
    react: 'react'  // react为外部依赖
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
