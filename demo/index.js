import React from 'react'
import { render } from 'react-dom'
import { createStore, dispatch } from '../src'
import A from './component/a'
import B from './component/b'
import C from './component/c'
import X from './ctx'
import './index.less'

createStore({
  name: 'nycticorax',
  number: 7,
  another: undefined,
  other: null,
  a: { b: 2, s: 1 },
  b: [1, 2],
})

function asyncDispatch(dispatch, getStore) {
  return new Promise((resolve) => {
    const { name } = getStore()
    dispatch({ name: '----' })
    setTimeout(() => {
      dispatch({ name: '====' })
      resolve(name)
    }, 1000)
  })
}

dispatch(asyncDispatch)
  .then((name) => {
    console.log(name)
    dispatch({ number: 70, other: '4' })
    dispatch({ a: { s: 1, b: 2 }, b: [1, 2] })
  })


render((
  <div className="root">
    <A test="test" />
    <B />
    <C />
    <X />
  </div>
), document.querySelector('#root'))
