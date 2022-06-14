import Nycticorax, { Dispatch as DP } from '../src/core'

describe('nycticorax', () => {
  it('default', async () => {
    type Store = { a: number, b: string[], x?: number, y?: string }
    type Dispatch = DP<Store>

    const {
      createStore,
      getStore,
      dispatch,
      subscribe,
      emit,
    } = new Nycticorax<Store>()

    createStore({ a: 1, b: ['1'], y: undefined })

    expect(getStore().a).toBe(1)

    emit({ a: 2, x: 1 }, true)
    expect(getStore().a).toBe(2)
    expect(getStore().x).toBe(1)

    const unSubscribe = subscribe((keys) => {
      expect(keys.join()).toBe('a')
    })
    emit({ a: 3 }, true)
    unSubscribe()
    unSubscribe()

    emit({ a: 4 })
    expect(getStore().a).toBe(3)

    setTimeout(() => {
      expect(getStore().a).toBe(4)
    })

    await new Promise((r) => setTimeout(r, 100))

    emit({ b: ['1'] }, true)
    expect(getStore().b[0]).toBe('1')

    const dispatcher: Dispatch = async ({ getStore: gs, emit: dp }, params) => {
      await new Promise((r) => setTimeout(r, 100))
      const { a } = gs()
      if (typeof params?.n === 'number') {
        const next = a + params.n
        dp({ a: next })
      }
    }

    await dispatch(dispatcher, { n: 1 })
    expect(getStore().a).toBe(5)

    // @ts-ignore
    emit({ c: 0 }, true)
    // @ts-ignore
    expect(getStore().c).toBe(0)

    await new Promise((r) => setTimeout(r, 100))
  })
})
