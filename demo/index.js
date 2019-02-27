import React from 'react'
import { render } from 'react-dom'
import { createStore, dispatch } from '../'
import A from './component/a'
import B from './component/b'
import C from './component/c'

createStore({
  name: 'nycticorax',
  number: 7,
})

dispatch({ number: 70 })

render((
  <div>
    <A />
    <B />
    <C />
  </div>
), document.querySelector('#root'))
