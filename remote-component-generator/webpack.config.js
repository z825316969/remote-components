const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);
module.exports = {
  // devServer : {  //
  //   host : 'localhost',
  //   port : '2899',
  //   open : true,
  //   static: "./"
  // },
  // entry: process.env.NODE_ENV === 'production' ? "./src/index.jsx" : "./src/app.jsx",
  entry: "./src/index.jsx",
  mode: "production",
  output: {
    filename: "[name].js",
    path: process.env.NODE_ENV === 'development' ? path.resolve(__dirname, "build") : path.resolve(__dirname, "dist"),
    library: {
      type: "amd-require",
    },
  },
  externals: {
    react: "react",
  },
  // optimization:{
  //   minimize: false,
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
