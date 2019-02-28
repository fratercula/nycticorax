import React from 'react'
import { render } from 'react-dom'
import { createStore, dispatch } from '../'
import A from './component/a'
import B from './component/b'
import C from './component/c'
import './index.less'

createStore({
  name: 'nycticorax',
  number: 7,
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

dispatch(asyncDispatch()).then(() => {
  dispatch({ number: 70 })
})

render((
  <div className="root">
    <A />
    <B />
    <C />
  </div>
), document.querySelector('#root'))
