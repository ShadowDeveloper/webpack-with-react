module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname + './public',
    filename: 'bundle.js'
  },
  devServer: {
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