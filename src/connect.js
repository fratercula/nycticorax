const ignoreStaticMethods = ['name', 'prototype', 'length', 'propTypes', 'defaultProps']

export default ({ getStore, subscribe, dispatch }) => {
  let React
  try {
    // eslint-disable-next-line global-require, import/no-unresolved
    React = require('react')
  } catch (e) {
    return undefined
  }

  return (...keys) => (C) => {
    class R extends React.Component {
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
          <C
            dispatch={dispatch}
            {...props}
            {...this.props}
          />
        )
      }
    }

    Object
      .getOwnPropertyNames(C)
      .forEach((method) => {
        if (!ignoreStaticMethods.includes(method)) {
          R[method] = C[method]
        }
      })

    return R
  }
}
