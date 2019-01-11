const path = require('path')

const outputPath = path.resolve(__dirname, 'output')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: outputPath,
    publicPath: '/',
  },
  devServer: {
    contentBase: outputPath,
  },
}
