const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { NODE_ENV = 'development' } = process.env

const optimizationMap = {
  production: {
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
}

module.exports = {
  entry: NODE_ENV === 'umd' ? {
    index: './src/index.ts',
    core: './src/core.ts',
  } : './demo/index.tsx',
  output: NODE_ENV === 'umd' ? {
    path: resolve(__dirname, './dist/umd'),
    filename: '[name].js',
    library: 'nycticorax',
    libraryTarget: 'umd',
    libraryExport: 'default',
  } : {
    path: resolve(__dirname, './docs'),
    filename: '[name].[chunkhash:8].js',
  },
  externals: NODE_ENV === 'umd' ? {
    react: 'React',
  } : undefined,
  mode: NODE_ENV === 'umd' ? 'production' : NODE_ENV,
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
  plugins: NODE_ENV === 'umd' ? undefined : [
    new HtmlWebpackPlugin({
      template: 'demo/index.html',
    }),
    // new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: optimizationMap[NODE_ENV],
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
                targets: { esmodules: NODE_ENV !== 'umd' },
                modules: false,
              }],
            ],
          },
        },
      },
    ],
  },
}
