import nycticorax from './nycticorax'

export const {
  dispatch,
  createStore,
  getStore,
  register,
  unregister,
  getId,
  reset,
} = nycticorax

try {
  // eslint-disable-next-line global-require, import/no-unresolved
  const React = require('react')

  exports.connect = (...keys) => {
    const id = getId()

    return C => class extends React.Component {
      state = {
        props: getStore(keys),
      }

      componentDidMount() {
        register(id, (triggerKeys) => {
          const sames = keys.filter(k => triggerKeys.includes(k))
          if (sames.length) {
            this.setState({ props: getStore(keys) })
          }
        })
      }

      componentWillUnmount() {
        unregister(id)
      }

      render() {
        const { props } = this.state

        return (
          <C {...this.props} {...props} dispatch={dispatch} />
        )
      }
    }
  }
} catch (e) {
  // ignore
}
