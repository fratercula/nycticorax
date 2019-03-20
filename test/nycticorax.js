import Nycticorax from '../src/nycticorax'

const nycticorax = new Nycticorax()

function reset() {
  nycticorax.store = {}
  nycticorax.ignores = []
  nycticorax.listeners = []
  nycticorax.strict = false
}

describe('nycticorax', () => {
  it('get store widthout strict', () => {
    expect(nycticorax.getStore(['a'])).toEqual({})
  })

  it('dispatch widthout strict', () => {
    nycticorax.dispatch({ a: 1 })
    expect(nycticorax.getStore()).toEqual({ a: 1 })
  })

  it('create store', () => {
    nycticorax.createStore({ a: 1 })
    expect(nycticorax.store).toEqual({ a: 1 })
    expect(nycticorax.strict).toBe(true)
    expect(() => nycticorax.createStore('')).toThrowError(new Error('Store data must be object'))
  })

  it('get store', () => {
    reset()
    expect(nycticorax.getStore()).toEqual({})
    expect(nycticorax.getStore([])).toEqual({})
    nycticorax.createStore({ a: 1, another: undefined })
    expect(nycticorax.store).toEqual({ a: 1 })
    expect(nycticorax.getStore('a')).toEqual({ a: 1 })
    expect(() => nycticorax.getStore('a', 'b')).toThrowError(new Error('Store key no exist: \'b\''))
  })

  it('subscribe listener', () => {
    reset()
    expect(Object.keys(nycticorax.listeners).length).toBe(0)
    const unsubscribe = nycticorax.subscribe(() => null)
    expect(Object.keys(nycticorax.listeners).length).toBe(1)
    expect(() => nycticorax.subscribe('')).toThrowError(new Error('Listener must be function'))
    unsubscribe()
    expect(Object.keys(nycticorax.listeners).length).toBe(0)
    nycticorax.subscribe(() => null)
    unsubscribe()
    expect(Object.keys(nycticorax.listeners).length).toBe(1)
  })

  it('dispatch', () => {
    reset()
    let list = []
    nycticorax.subscribe((keys) => {
      list = keys
    })
    expect(() => nycticorax.dispatch(''))
      .toThrowError(new Error('Dispatch type error, must be function or object'))

    nycticorax.dispatch({ a: 2 })
    expect(list).toEqual(['a'])

    reset()
    nycticorax.createStore({ a: 2 })
    expect(() => nycticorax.dispatch({ b: 1 }))
      .toThrowError(new Error('Dispatch key not exist: \'b\''))
    expect(() => nycticorax.dispatch({ a: 'a' }))
      .toThrowError(new Error('Dispatch key type mismatch: \'a\''))

    list = []

    function asyncA({ dispatch, getStore }) {
      return new Promise((resolve) => {
        const { a } = getStore()
        setTimeout(() => {
          dispatch({ a: a + 1 })
          resolve()
        }, 100)
      })
    }

    nycticorax.dispatch(asyncA)
      .then(() => {
        expect(list).toEqual(['a'])
      })

    reset()
    nycticorax.createStore({ a: 1, b: 1 })
    list = []
    nycticorax.subscribe((keys) => {
      list = keys
    })
    nycticorax.dispatch({ b: 1, a: 1 })
    expect(list).toEqual([])
  })
})
