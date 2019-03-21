import React from 'react'
import { connect } from '../../src'

function B({ number, dispatch }) {
  return (
    <div>
      <h2>Component B</h2>
      <p>number: {number}</p>
      <input
        onInput={e => dispatch({ name: e.target.value })}
        placeholder="input text"
      />
    </div>
  )
}

export default connect('number')(B)
