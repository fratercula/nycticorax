import React, { Component } from 'react'
import { connect, subscribe } from '../../src'

class C extends Component {
  state = {
    current: 'dispatch keys:',
  }

  unsubscribe = null

  componentDidMount() {
    this.subscribe()
  }

  subscribe = () => {
    if (this.unsubscribe === null) {
      this.unsubscribe = subscribe((keys) => {
        this.setState({ current: `dispatch keys: ${keys.join(', ')}` })
      })
    }
  }

  onClick = () => {
    this.props.dispatch({ name: Math.random() + '' })
    this.props.dispatch({ number: Math.random() })
  }

  render() {
    return (
      <div>
        <h2>Component C</h2>
        <p>name: {this.props.name}</p>
        <button onClick={this.onClick}>combine</button>
        <p className="current">{this.state.current}</p>
        <button onClick={this.subscribe}>subscribe</button>
        <button
          onClick={() => {
            if (this.unsubscribe) {
              this.unsubscribe()
              this.unsubscribe = null
            }
          }}
        >
          unsubscribe
        </button>
      </div>
    )
  }
}

export default connect('name')(C)
