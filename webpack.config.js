const HtmlWebpackPlugin = require('html-webpack-plugin');
<<<<<<< HEAD
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
=======
>>>>>>> 22ece69a962e688c26562fe87ba10ece5cb854f6
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
<<<<<<< HEAD
    new CleanWebpackPlugin(),
=======
>>>>>>> 22ece69a962e688c26562fe87ba10ece5cb854f6
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
    ],
  },
};
