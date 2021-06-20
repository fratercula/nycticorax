const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV = 'development' } = process.env

module.exports = {
  entry: './demo/index.tsx',
  mode: NODE_ENV,
  devtool: 'source-map',
  target: 'web',
  devServer: {
    disableHostCheck: true,
    contentBase: resolve(__dirname, './demo'),
    port: 1234,
    host: '0.0.0.0',
    stats: 'minimal',
    hot: true,
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'demo/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [require.resolve('@babel/preset-env'), {
                targets: { esmodules: true },
                modules: false,
              }],
            ],
          },
        },
      },
    ],
  },
}
