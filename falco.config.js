const { NODE_ENV } = process.env

const output = {}

if (NODE_ENV === 'docs') {
  output.filename = 'index.[hash:8].js'
}

if (NODE_ENV === 'umd') {
  output.filename = 'index.js'
  output.library = 'nycticorax'
  output.libraryTarget = 'umd'
}

module.exports = {
  externals: [
    {
      name: 'react',
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      urls: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      urls: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js',
    },
  ],
  npm: {
    registry: 'https://registry.npm.taobao.org',
  },
  // env: NODE_ENV,
  mode: NODE_ENV === 'development' ? NODE_ENV : 'production',
  output,
  targets: {
    esmodules: true,
  },
}
