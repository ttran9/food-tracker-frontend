const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const configObj = require("/etc/react_frontend_config.json");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    liveReload: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
