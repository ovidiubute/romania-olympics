var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./app/main.js']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: path.resolve(__dirname, "app"),
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
}
