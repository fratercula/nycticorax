import Nycticorax, { Dispatch as DP } from '../src/nycticorax'

describe('nycticorax', () => {
  it('default', async () => {
    type Store = { a: number, b: string[] }
    type Dispatch = DP<Store>

    const {
      createStore,
      getStore,
      dispatch,
      subscribe,
    } = new Nycticorax<Store>()

    createStore({ a: 1, b: ['1'] })

    expect(getStore().a).toBe(1)

    dispatch({ a: 2 }, true)
    expect(getStore().a).toBe(2)

    const unSubscribe = subscribe((keys) => {
      expect(keys.join()).toBe('a')
    })
    dispatch({ a: 3 }, true)
    unSubscribe()
    unSubscribe()

    dispatch({ a: 4 })
    expect(getStore().a).toBe(3)

    setTimeout(() => {
      expect(getStore().a).toBe(4)
    })

    await new Promise((r) => setTimeout(r, 100))

    dispatch({ b: ['1'] }, true)
    expect(getStore().b[0]).toBe('1')

    const dispatcher: Dispatch = async ({ getStore: gs, dispatch: dp }, ...args) => {
      await new Promise((r) => setTimeout(r, 100))
      const { a } = gs()
      if (typeof args[0] === 'number') {
        const next = a + args[0]
        dp({ a: next })
      }
    }

    await dispatch(dispatcher, 1)
    expect(getStore().a).toBe(5)

    // @ts-ignore
    dispatch({ c: 0 })
    // @ts-ignore
    expect(getStore().c).toBe(undefined)

    await new Promise((r) => setTimeout(r, 100))
  })
})
