/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react'
import { render } from 'react-dom'
import VConsole from 'vconsole'
import {
  createStore,
  getStore,
  dispatch,
  subscribe,
  Dispatch,
} from './store/index'
import Com from './react'

// eslint-disable-next-line no-new
new VConsole()

createStore({
  config: {
    type: 'page',
    on: false,
  },
  time: 11,
})

const unsubscribe = subscribe((keys) => {
  console.log('subscribe', keys)
})

console.log('store0', getStore())

dispatch({ time: 1 })
dispatch({ config: { on: true, type: 'component' } })

console.log('store1', getStore())
setTimeout(() => console.log('store2', getStore()))

dispatch({ time: 2 }, true)

console.log('store3', getStore())

const dispatcher0: Dispatch = ({ getStore: gs, dispatch: dp }, ...args) => {
  console.log('args0', args)
  const { time } = gs()
  dp({ time: time + 1 })
}

dispatch(dispatcher0, 1, 2)

const dispatcher1: Dispatch = async ({ getStore: gs, dispatch: dp }, ...args) => {
  console.log('args1', args)
  await new Promise((r) => setTimeout(r, 1000))
  const { config } = gs()
  if (typeof args[0] === 'boolean') {
    [config.on] = args
  }
  dp({ config })
}

dispatch(dispatcher1, false).then(() => {
  dispatch({ time: 1000 })
})

unsubscribe()

render((
  <Com />
), document.querySelector('#root'))
