import React, { Component } from 'react'
import { connect } from '../../src'

function asyncDispatch() {
  return (dispatch, getStore, next) => {
    const { name } = getStore()
    dispatch({ name: 'tttt' })
    setTimeout(() => {
      dispatch({ name: name + '????' })
      next(name)
    }, 1000)
  }
}

class A extends Component {
  componentDidMount() {
    console.log('A', this.props)
  }

  onClick = () => {
    this.props.dispatch({ 'number': 1 })
  }

  onAsync = () => {
    this.props.dispatch(asyncDispatch())
      .then((name) => console.log(name))
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
