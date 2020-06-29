import React from 'react'
import Nycticorax from '../src'

const { createStore, connect, useStore } = new Nycticorax()

createStore({ name: 'xyz', number: 1 })

function X({ dispatch, name }) {
  const { number } = useStore('number')

  return (
    <div>
      <h2>Component X</h2>
      <p>name: {name}</p>
      <p>number: {number}</p>
      <input
        placeholder="input text"
        onInput={e => dispatch({ name: e.target.value, s: 1, number: Math.random() })}
      />
    </div>
  )
}

export default connect('name')(X)
