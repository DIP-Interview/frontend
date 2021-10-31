const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"), // 결과물 경로
    filename: "bundle.js", // 결과물 파일명
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpeg|jpg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
