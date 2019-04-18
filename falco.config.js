const { NODE_ENV } = process.env

const output = {}

if (NODE_ENV === 'docs') {
  output.filename = 'index.[hash:8].js'
}

if (NODE_ENV === 'umd') {
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
      urls: 'https://cdn.staticfile.org/react/16.8.2/umd/react.production.min.js',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      urls: 'https://cdn.staticfile.org/react-dom/16.8.2/umd/react-dom.production.min.js',
    },
  ],
  npm: {
    registry: 'https://registry.npm.taobao.org',
  },
  env: NODE_ENV,
  mode: NODE_ENV === 'development' ? NODE_ENV : 'production',
  output,
}
