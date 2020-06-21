import React from 'react'
import { render } from 'react-dom'
import { createStore, dispatch } from '../src'
import A from './component/a'
import B from './component/b'
import C from './component/c'
import H from './component/hooks'
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

async function asyncDispatch({ dispatch, getStore }) {
  await new Promise((r) => setTimeout(r, 1000))
  const { name } = getStore()
  dispatch({ name: 'lorem' })
  await new Promise((r) => setTimeout(r, 1000))
  dispatch({ name: 'ipsum' })
  return name
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
    <H />
  </div>
), document.querySelector('#root'))
