import React from 'react'
import { render } from 'react-dom'
import { createStore, dispatch } from '../src'
import A from './component/a'
import B from './component/b'
import C from './component/c'
import './index.less'

createStore({
  name: 'nycticorax',
  number: 7,
  another: undefined,
  other: null,
  a: { b: 2, s: 1 },
  b: [1, 2],
})

function asyncDispatch() {
  return (dispatch, getStore, next) => {
    const { name } = getStore()
    dispatch({ name: '----' })
    setTimeout(() => {
      dispatch({ name: '====' })
      next(name)
    }, 1000)
  }
}

dispatch(asyncDispatch())
  .then(() => dispatch({ number: 70, other: '4' }))
  .then(() => dispatch({ a: { s: 1, b: 2 }, b: [1, 2] }))

render((
  <div className="root">
    <A />
    <B />
    <C />
  </div>
), document.querySelector('#root'))
