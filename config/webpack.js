const path = require('path')

function firenpmWeb (name) {
  return path.resolve('./node_modules/firenpm.web/' + name + '.js')
}
module.exports = {
  entry: './demo/index.js',
  output: {
    filename: 'bundle.js',
    path: './demo',
    publicPath: 'http://localhost:8080/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'demo',
    inline: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: firenpmWeb('babel-loader') },
      { test: /\.json$/, loader: firenpmWeb('json-loader') },
      { test: /\.css$/, loaders: [firenpmWeb('style-loader'), firenpmWeb('css-loader')] },
      { test: /\.(png|jpg)$/, loader: firenpmWeb('url-loader') }
    ]
  }
}
