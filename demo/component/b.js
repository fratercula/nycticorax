import React from 'react'
import { connect } from '../../src'

function B({ number }) {
  return (
    <div>
      <h2>Component B</h2>
      <p>Number is {number}</p>
    </div>
  )
}

export default connect('number')(B)
