import React, { Component } from 'react'
import listener from './listener'

export const createStore = listener.setStore

export const connect = (...keys) => {
  const id = (listener.index += 1)

  return C => class extends Component {
    state = {
      props: listener.getStore(keys),
    }

    componentDidMount() {
      listener.register(id, (key) => {
        if (keys.includes(key)) {
          this.setState({ props: listener.getStore(keys) })
        }
      })
    }

    componentWillUnmount() {
      listener.unregister(id)
    }

    render() {
      const { props } = this.state

      return (
        <C {...props} dispatch={listener.dispatch} />
      )
    }
  }
}
