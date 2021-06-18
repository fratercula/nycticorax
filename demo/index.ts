import {
  createStore,
  getStore,
  dispatch,
  subscribe,
  Dispatch,
} from './store/index'

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

const dispatcher0: Dispatch = ({ getStore, dispatch }, ...args) => {
  console.log('args0', args)
  const { time } = getStore()
  dispatch({ time: time + 1 })
}

dispatch(dispatcher0, 1, 2)

const dispatcher1: Dispatch = async ({ getStore, dispatch }, ...args) => {
  console.log('args1', args)
  await new Promise((r) => setTimeout(r, 1000))
  const { config } = getStore()
  if (typeof args[0] === 'boolean') {
    config.on = args[0]
  }
  dispatch({ config })
}

dispatch(dispatcher1, false).then(() => {
  dispatch({ time: 1000 })
})

unsubscribe()
