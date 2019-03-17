import React, { Component } from 'react'
import { connect, getStore, subscribe } from '../../src'

class C extends Component {
  onClick = () => {
    this.props.dispatch({ 'name': 'bkbk' })
  }

  componentDidMount() {
    this.unsubscribe = subscribe((keys) => {
      console.log(keys)
      console.log(getStore())
    })
  }

  render() {
    return (
      <div>
        <h2>Component C</h2>
        <button onClick={this.onClick}>set value name bkbk</button>
        <button onClick={() => this.unsubscribe()}>stop subscribe</button>
      </div>
    )
  }
}

export default connect()(C)
