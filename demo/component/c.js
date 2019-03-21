import React, { Component } from 'react'
import { connect, subscribe } from '../../src'

class C extends Component {
  state = {
    current: 'dispatch keys:',
  }

  componentDidMount() {
    this.unsubscribe = subscribe((keys) => {
      this.setState({ current: `dispatch keys: ${keys.join(', ')}` })
    })
  }

  render() {
    return (
      <div>
        <h2>Component C</h2>
        <p>name: {this.props.name}</p>
        <p className="current">{this.state.current}</p>
      </div>
    )
  }
}

export default connect('name')(C)
