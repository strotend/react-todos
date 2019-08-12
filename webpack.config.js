const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const webpackConfig = {
    mode: "production",
    entry: {
      app: path.resolve("./src/index.ts")
    },
    module: {
      rules: [
        {
          test: /.(jsx?|tsx?)$/,
          loader: "babel-loader",
          exclude: { test: /node_modules/ }
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

  switch (argv.mode) {
    case "development":
      webpackConfig.devServer = {
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true,
        hot: true,
        host: "0.0.0.0",
        port: 8080
      };
  }

  return webpackConfig;
};
