import nycticorax from './nycticorax'

export const {
  dispatch,
  createStore,
  getStore,
  subscribe,
} = nycticorax

try {
  // eslint-disable-next-line global-require, import/no-unresolved
  const React = require('react')

  exports.connect = (...keys) => C => class extends React.Component {
    state = {
      props: getStore(...keys),
    }

    componentDidMount() {
      this.unsubscribe = subscribe((triggerKeys) => {
        const sames = keys.filter(k => triggerKeys.includes(k))
        if (sames.length) {
          this.setState({ props: getStore(...keys) })
        }
      })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      const { props } = this.state

      return (
        <C {...this.props} {...props} dispatch={dispatch} />
      )
    }
  }
} catch (e) {
  // ignore
}
