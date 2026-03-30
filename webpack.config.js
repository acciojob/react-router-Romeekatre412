const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
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

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // ✅ ADD THIS PART
  devServer: {
  port: 8080,
  open: true,
  hot: false,
  liveReload: true,
  historyApiFallback: true,
},
};