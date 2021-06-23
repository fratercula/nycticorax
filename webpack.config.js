const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { NODE_ENV = 'development' } = process.env

module.exports = {
  entry: './demo/index.tsx',
  output: {
    path: resolve(__dirname, './docs'),
    filename: '[name].[chunkhash:8].js',
  },
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
    // new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: NODE_ENV === 'development' ? undefined : {
    splitChunks: {
      minSize: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
        },
      },
    },
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
              ['@babel/preset-env', {
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
