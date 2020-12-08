var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.js', '.css'],
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './examples'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {test: /\.(png|svg)$/, loader: 'url-loader?limit=8192'},
      {
        test: /^((?!\.module).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.module\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!'
        ]
      }, {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
        include: [path.join(__dirname, 'src'),
          path.join(__dirname, 'example')]
      }]
  }
};
