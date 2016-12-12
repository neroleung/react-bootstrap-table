module.exports = {
  entry:  './nero_examples.jsx',
  output: {
    filename: 'nero_examples_dist.js',
    path:     './js',
    resolve:  {
      extensions: ['', '.js', '.jsx']
    },
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        loader:  'babel-loader',
        exclude: /node_modules/,
        query:   {
          cacheDirectory: true,
          presets:        ['react', 'es2015']
        }
      }]
  }
};
