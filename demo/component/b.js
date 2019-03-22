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
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ name: 'nyc' }, 'sync')
          dispatch({ number: 101 }, 'sync')
        }}
      >
        sync dispatch
      </button>
    </div>
  )
}

export default connect('number')(B)
