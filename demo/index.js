import React from 'react'
import { render } from 'react-dom'
import { createStore } from '../'
import A from './component/a'
import B from './component/b'
import C from './component/c'

createStore({
  name: 'nycticorax',
  number: 7,
})

render((
  <div>
    <A />
    <B />
    <C />
  </div>
), document.querySelector('#root'))
