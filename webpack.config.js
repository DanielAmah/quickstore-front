const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
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
  plugins: [HtmlWebpackPluginConfig]
}