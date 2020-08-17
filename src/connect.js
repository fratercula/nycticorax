import warn from './helper/warn'

const ignoreStaticMethods = [
  'name',
  'prototype',
  'length',
  'propTypes',
  'defaultProps',
  'getDerivedStateFromProps',
]

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
        props: getStore(),
      }

      componentDidMount() {
        if (!keys.length) {
          warn('you should provide the store keys')
        }

        this.unsubscribe = subscribe((triggerKeys) => {
          const sames = keys.filter(k => triggerKeys.includes(k))
          if (sames.length) {
            this.setState({ props: getStore() })
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
