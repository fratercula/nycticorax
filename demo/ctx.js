import React from 'react'
import Nycticorax from '../src'

const { createStore, connect } = new Nycticorax()

createStore({ name: 1 })

function X({ dispatch, name }) {
  return (
    <div>
      <h2>Component X, Different context </h2>
      <p>name: {name}</p>
      <button onClick={() => {
        dispatch({ name: 2 })
      }}>set name</button>
    </div>
  )
}

export default connect('name')(X)
