const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve("./src/index.ts")
  },
  module: {
    rules: [
      {
        test: /.(jsx?|tsx?)$/,
        loader: "babel-loader",
        exclude: { test: /node_modules/ },
        options: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"]
        }
      },
      {
        test: /.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./src/index.html"),
      favicon: path.resolve("./assets/favicon.ico")
    })
  ],
  resolve: {
    alias: {
      "@assets": path.resolve("./assets"),
      "@src": path.resolve("./src")
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
};
