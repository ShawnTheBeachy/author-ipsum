"use strict";

import HtmlWebpackPlugin from "html-webpack-plugin";
import Path from "path";
import Webpack from "webpack";

const root = Path.join(__dirname, "src");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  resolve: {
    alias: {
      actions: Path.join(root, "actions"),
      assets: Path.join(root, "assets"),
      reducers: Path.join(root, "reducers"),
      views: Path.join(root, "views")
    }
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        test: /\.(js|jsx)$/
      },
      {
        exclude: /node_modules/,
        loader: "file-loader",
        test: /\.(png|ico|jpg|gif|svg|eot|ttf|woff|woff2)$/
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: Path.resolve("build")
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("debug")
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "index.html",
      inject: "body",
      template: "./src/index.html",
      title: "Author Ipsum"
    })
  ]
};
