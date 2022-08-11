/* eslint-disable no-console */
import { useEffect } from 'react'
import {
  createStore,
  getStore,
  dispatch,
  emit,
  subscribe,
  Dispatch,
} from './store/index'

export default () => {
  useEffect(() => {
    createStore({
      config: {
        type: 'page',
        on: false,
      },
      time: 11,
      test: undefined,
    })

    const unsubscribe = subscribe({
      time(n, o) {
        console.log(n, o, 'subscribe')
      },
    })

    console.log('store0', getStore())

    emit({ time: 1 })
    emit({ config: { on: true, type: 'component' } })

    console.log('store1', getStore())
    setTimeout(() => console.log('store2', getStore()))

    emit({ time: 2, test: '1111' }, true)

    console.log('store3', getStore())

    const dispatcher0: Dispatch = async ({ getStore: gs, emit: dp }, params) => {
      console.log('params0', params)
      const { time } = gs()
      dp({ time: time + 1 })
    }

    dispatch(dispatcher0, { a: 1 })

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
