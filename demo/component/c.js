import React, { Component } from 'react'
import { connect, getStore, register, getId } from '../../'

class C extends Component {
  onClick = () => {
    this.props.dispatch({ 'name': 'bkbk' })
  }

  componentDidMount() {
    const id = getId()
    register(id, (keys) => {
      console.log(keys)
      console.log(getStore())
    })
  }

  render() {
    return (
      <div>
        <h2>Component C</h2>
        <button onClick={this.onClick}>set value name bkbk</button>
      </div>
    )
  }
}

export default connect()(C)
