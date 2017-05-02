module.exports = {
  entry: './app/App.js',
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/js"
  },
  devServer: { // ############## With Hot Reload
    inline: true,
    contentBase: './public',
    port: 8080
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // never forget '-loader' sufix for version 2.x.x and above
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}