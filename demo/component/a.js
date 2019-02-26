import React, { Component } from 'react'
import { connect } from '../../'

class A extends Component {
  onClick = () => {
    this.props.dispatch('number', 1)
  }

  render() {
    const { name } = this.props
    return (
      <div>
        <h2>Component A</h2>
        <p>name: {name}</p>
        <p>Click to change value: Number</p>
        <button onClick={this.onClick}>set Number 1</button>
      </div>
    )
  }
}

export default connect('name')(A)
