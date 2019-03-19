export default ({ getStore, subscribe, dispatch }) => {
  let React
  try {
    // eslint-disable-next-line global-require, import/no-unresolved
    React = require('react')
  } catch (e) {
    return undefined
  }

  return (...keys) => C => class extends React.Component {
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
}
