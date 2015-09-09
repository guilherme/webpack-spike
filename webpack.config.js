module.exports = {
  entry: "./entry.js",
  output: {
    path: './assets/',
    filename: "[name]-bundle.js",
    publicPath: 'assets/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
