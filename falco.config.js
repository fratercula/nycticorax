const { NODE_ENV } = process.env
const mode = NODE_ENV === 'prod' ? 'production' : 'development'

module.exports = {
  externals: [
    {
      name: 'react',
      root: 'React',
      urls: 'https://cdn.staticfile.org/react/16.8.2/umd/react.development.js',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      urls: 'https://cdn.staticfile.org/react-dom/16.8.2/umd/react-dom.development.js',
    },
  ],
  registry: 'https://registry.npm.taobao.org',
  esModule: false,
  mode,
  output: mode === 'production'
    ? {
      library: 'nycticorax',
      libraryTarget: 'umd',
    }
    : {},
}
