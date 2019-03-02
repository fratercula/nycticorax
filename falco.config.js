const { NODE_ENV } = process.env

module.exports = {
  externals: [
    {
      name: 'react',
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      // urls: 'https://cdn.staticfile.org/react/16.8.2/umd/react.development.js',
      urls: 'https://cdn.staticfile.org/react/16.8.2/umd/react.production.min.js',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      urls: 'https://cdn.staticfile.org/react-dom/16.8.2/umd/react-dom.production.min.js',
      // urls: 'https://cdn.staticfile.org/react-dom/16.8.2/umd/react-dom.development.js',
    },
  ],
  registry: 'https://registry.npm.taobao.org',
  esModule: false,
  mode: NODE_ENV ? 'production' : 'development',
  output: NODE_ENV === 'prod'
    ? {
      library: 'nycticorax',
      libraryTarget: 'umd',
    }
    : {},
}
