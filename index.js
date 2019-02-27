import React, { Component } from 'react' // eslint-disable-line import/no-unresolved
import nycticorax from './nycticorax'

export const { dispatch, createStore } = nycticorax

export const connect = (...keys) => {
  const id = nycticorax.index

  nycticorax.index += 1

  return C => class extends Component {
    state = {
      props: nycticorax.getStore(keys),
    }

    componentDidMount() {
      nycticorax.register(id, (triggerKeys) => {
        const sames = keys.filter(k => triggerKeys.includes(k))
        if (sames.length) {
          this.setState({ props: nycticorax.getStore(keys) })
        }
      })
    }

    componentWillUnmount() {
      nycticorax.unregister(id)
    }

    render() {
      const { props } = this.state

      return (
        <C {...props} dispatch={dispatch} />
      )
    }
  }
}
