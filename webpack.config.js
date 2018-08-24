module.exports = {
  mode: 'production',
  entry: {
    build: './src/index.js',
  },
  output: {
    path: __dirname + "/dist",
    filename: "main.js",
    sourcePrefix: "",
    library: 'uttr',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.sg$/,
        use: "snakeparser-loader"
      },
      {
        test: /\.uttr$/,
        use: "uttr-loader"
      }
    ]
  }
};
