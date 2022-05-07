const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          // open: true,
          port: 8080,
          hot: false,
          client: {
            logging: 'none',
          },
        },
      };

const esLintPlugin = (isDev) =>
  isDev ? [] : [new ESLintPlugin({ extensions: ["js"] })];

module.exports = ({ development }) => ({
  mode: development ? "development" : "production",
  devtool: development ? "inline-source-map" : false,
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    ...esLintPlugin(development),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  resolve: {
    extensions: [".js"],
  },
  ...devServer(development),
});
