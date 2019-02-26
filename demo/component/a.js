import React, { Component } from 'react'
import { connect } from '../../'

function asyncDispatch() {
  return (dispatch, getStore) => {
    const { name } = getStore()
    setTimeout(() => {
      dispatch({ name: name + '????' })
    }, 1000)
  }
}

class A extends Component {
  onClick = () => {
    this.props.dispatch({ 'number': 1 })
  }

  onAsync = () => {
    this.props.dispatch(asyncDispatch())
  }

  render() {
    const { name } = this.props
    return (
      <div>
        <h2>Component A</h2>
        <p>name: {name}</p>
        <p>Click to change value: Number</p>
        <button onClick={this.onClick}>set Number 1</button>
        <button onClick={this.onAsync}>Async</button>
      </div>
    )
  }
}

export default connect('name')(A)
