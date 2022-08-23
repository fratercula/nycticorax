const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV = 'development' } = process.env

module.exports = {
  entry: './demo/index.tsx',
  mode: NODE_ENV,
  devtool: 'source-map',
  stats: 'minimal',
  target: 'web',
  devServer: {
    allowedHosts: 'all',
    port: 1234,
    host: '0.0.0.0',
    static: {
      directory: './demo',
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
