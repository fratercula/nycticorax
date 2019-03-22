import React, { Component } from 'react'
import { connect } from '../../src'

function asyncDispatch({ dispatch, getStore }, ...args) {
  console.log(args)
  return new Promise((resolve) => {
    const { name, number } = getStore()
    setTimeout(() => {
      dispatch({ number: number + 1 })
      dispatch({ name: `${name}a` })
      resolve(name)
    }, 1000)
  })
}

class A extends Component {
  componentDidMount() {
    console.log('A', this.props)
  }

  onAsync = () => {
    this.props.dispatch(asyncDispatch, 'a', 'b')
      .then((name) => console.log(name))
  }

  render() {
    const { name } = this.props
    return (
      <div>
        <h2>Component A</h2>
        <p>name: {name}</p>
        <input
          type="number"
          onInput={e => this.props.dispatch({ number: Number(e.target.value) })}
          placeholder="input number"
        />
        <br />
        <br />
        <button onClick={this.onAsync}>async dispatch</button>
      </div>
    )
  }
}

export default connect('name')(A)
