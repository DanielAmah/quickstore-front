const path = require('path');
const webpack = require('webpack'); 

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

config = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader'},
      { test: /\.jsx$/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader?name=client/fonts/[name].[ext]'},
      { test: /\.(png|svg|jpg|gif)$/,
       use: [
        'file-loader']
       }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('development') } }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   output: {comments: false },
    //   mangle: false,
    //   sourcemap: false,
    //   // minimize: true,
    //   mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] }
    // }),
    HtmlWebpackPluginConfig
  ]
};

module.exports = config;