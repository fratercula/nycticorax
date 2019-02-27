import React, { Component } from 'react'
import { connect, watch, getStore } from '../../'

class C extends Component {
  onClick = () => {
    this.props.dispatch({ 'name': 'bkbk' })
  }

  componentDidMount() {
    watch((keys) => {
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
