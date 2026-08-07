const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { NODE_ENV = 'development' } = process.env
const isProd = NODE_ENV === 'production'
const isDoc = NODE_ENV === 'docs'

const srcEntry = {
  index: path.resolve(__dirname, './src/index.ts'),
  core: path.resolve(__dirname, './src/core.ts'),
}

const reactExternalsUmd = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    umd: 'react',
  },
}

// ESM build configuration
const esmConfig = {
  entry: srcEntry,

  mode: 'production',

  output: {
    path: path.resolve(__dirname, './dist/esm'),
    filename: '[name].js',
    library: {
      type: 'module',
    },
  },

  devtool: 'source-map',

  stats: 'minimal',

  target: 'web',

  experiments: {
    outputModule: true,
  },

  externals: {
    react: 'react',
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

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

// UMD build configuration (backward compatibility)
const umdConfig = {
  entry: srcEntry,

  mode: 'production',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'Nycticorax',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },

  devtool: 'source-map',

  stats: 'minimal',

  target: 'web',

  externals: reactExternalsUmd,

  plugins: [new BundleAnalyzerPlugin()],

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

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

if (isProd) {
  module.exports = [esmConfig, umdConfig]
} else {
  let entry = path.resolve(__dirname, './demo/index.tsx')
  let output = undefined
  let externals = undefined
  let plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './demo/index.html'),
    }),
  ]

  if (isDoc) {
    entry = path.resolve(__dirname, './demo/index.tsx')
    output = {
      path: path.resolve(__dirname, './docs'),
      filename: '[name].[chunkhash:8].js',
    }
  }

  module.exports = {
    entry,

    mode: isDoc ? 'production' : 'development',

    output,

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

    plugins,

    externals,

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
}
