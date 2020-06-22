import React from 'react'
import { useStore, dispatch } from '../../src'

export default function () {
  const { number } = useStore('number')

  console.log('hooks')

  return (
    <div>
      <h2>Hooks</h2>
      <p>{number}</p>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ number: 101 }, 'sync')
        }}
      >
        sync dispatch
      </button>
    </div>
  )
}
