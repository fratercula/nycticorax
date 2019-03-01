import React, { Component } from 'react' // eslint-disable-line import/no-unresolved
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

export const connect = (...keys) => {
  const id = getId()

  return C => class extends Component {
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
        <C {...props} dispatch={dispatch} />
      )
    }
  }
}
