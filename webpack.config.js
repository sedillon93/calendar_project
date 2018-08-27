'use strict';

const path = require('path');

const webpackConfig = module.exports = {};
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig.entry = `${__dirname}/calendar_project/main.js`;
webpackConfig.output = {
  path: path.resolve(__dirname, './dist'),
  filename: 'bundle.[hash].js',
};
webpackConfig.plugins = [
  new htmlWebpackPlugin(),
  new extractTextPlugin('bundle.[hash].css'),
];
webpackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
    },
  ],
};
webpackConfig.devServer = {
  historyApiFallback: true,
};
