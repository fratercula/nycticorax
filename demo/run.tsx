/* eslint-disable no-console */
import { useEffect } from 'react'
import nycticorax, {
  createStore,
  getStore,
  dispatch,
  emit,
  subscribe,
  Dispatch,
  syb,
} from './store/index'

export default () => {
  useEffect(() => {
    createStore({
      config: {
        type: 'page',
        on: false,
      },
      [syb]: '',
      array: [],
      time: 11,
      // test: undefined,
    })

    const s = getStore()
    const test = getStore('test')
    const arr = getStore('array')
    const sy = getStore(syb)
    console.log(s, test, arr, sy, 'types')
    const theArray = getStore('array')
    theArray.push(1, 2)

    const unsubscribe = subscribe({
      time(n, o) {
        console.log(n, o, 'subscribe')
      },
      test(n, o) {
        console.log(n, o, 'subscribe test')
      },
      array(n, o) {
        console.log(n, o, 'array')
      },
      [syb](n, o) {
        console.log(n, o, 'syb')
      },
    })

    emit({ [syb]: 'syb' }, true)

    nycticorax.onChange = (v) => {
      console.log(v, 'onChange')
    }

    console.log('store0', getStore())

    emit({ time: 1 })
    emit({ config: { on: true, type: 'component' } })
    emit({ array: theArray })

    console.log('store1', getStore())
    setTimeout(() => console.log('store2', getStore()))

    emit({ time: 2, test: '1111' }, true)
    emit({ test: '2222' }, true)

    console.log('store3', getStore())

    const dispatcher0: Dispatch = async ({ getStore: gs, emit: dp }, params, next) => {
      console.log('params0', params, next)
      const { time } = gs()
      dp({ time: time + 1 })
    }

    dispatch(dispatcher0, { a: 1 }, 1111)

    const dispatcher1: Dispatch = async ({ getStore: gs, emit: dp }, params) => {
      console.log('params1', params)
      await new Promise((r) => setTimeout(r, 1000))
      const { config } = gs()
      if (typeof params?.type === 'boolean') {
        config.on = params.type
      }
      dp({ config })
    }

    const dispatcher2: Dispatch = async ({ getStore: gs }) => {
      const { config } = gs()
      console.log(config)
      return 1
    }

    dispatch(dispatcher1, { type: false })

    dispatch(dispatcher2).then(() => {
      console.log('2')
      emit({ time: 1000 })
    })

    unsubscribe()
  }, [])

  return null
}
