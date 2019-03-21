import React from 'react'
import Nycticorax from '../src'

const { createStore, connect } = new Nycticorax()

createStore({ name: 'xyz' })

function X({ dispatch, name }) {
  return (
    <div>
      <h2>Component X, different instance </h2>
      <p>name: {name}</p>
      <input
        placeholder="input text"
        onInput={e => dispatch({ name: e.target.value })}
      />
    </div>
  )
}

export default connect('name')(X)
