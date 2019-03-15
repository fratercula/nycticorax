import nycticorax from '../src/nycticorax'

describe('nycticorax', () => {
  it('get id', () => {
    let id = nycticorax.getId()
    expect(id).toEqual(1)
    expect(nycticorax.index).toEqual(1)
    id = nycticorax.getId()
    expect(id).toEqual(2)
    expect(nycticorax.index).toEqual(2)
  })

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

  it('reset store', () => {
    nycticorax.reset()
    expect(nycticorax.store).toEqual({})
    expect(nycticorax.index).toEqual(0)
    expect(nycticorax.listeners).toEqual({})
    expect(nycticorax.strict).toBe(false)
  })

  it('get store', () => {
    expect(nycticorax.getStore()).toEqual({})
    expect(nycticorax.getStore([])).toEqual({})
    nycticorax.createStore({ a: 1, another: undefined })
    expect(nycticorax.store).toEqual({ a: 1 })
    expect(nycticorax.getStore(['a'])).toEqual({ a: 1 })
    expect(() => nycticorax.getStore(['a', 'b'])).toThrowError(new Error('Store key no exist: \'b\''))
  })

  it('register listener', () => {
    expect(Object.keys(nycticorax.listeners).length).toBe(0)
    const id = nycticorax.getId()
    nycticorax.register(id, () => null)
    expect(Object.keys(nycticorax.listeners).length).toBe(1)
    expect(() => nycticorax.register('')).toThrowError(new Error('Listener must be function'))
    nycticorax.unregister(id)
    expect(Object.keys(nycticorax.listeners).length).toBe(0)
  })

  it('dispatch', () => {
    let list = []
    nycticorax.register(nycticorax.getId(), (keys) => {
      list = keys
    })
    expect(() => nycticorax.dispatch('')).toThrowError(new Error('Dispatch type error, must be function or object'))

    nycticorax.dispatch({ a: 2 })
    expect(list).toEqual(['a'])

    expect(() => nycticorax.dispatch({ b: 1 })).toThrowError(new Error('Dispatch key not exist: \'b\''))
    expect(() => nycticorax.dispatch({ a: 'a' })).toThrowError(new Error('Dispatch key type mismatch: \'a\''))

    nycticorax.dispatch({ another: 1 })
    expect(nycticorax.store.another).toBe(1)

    list = []

    function asyncA(dispatch, getStore) {
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

    nycticorax.reset()
    nycticorax.createStore({ a: 1, b: 1 })
    list = []
    nycticorax.register(nycticorax.getId(), (keys) => {
      list = keys
    })
    nycticorax.dispatch({ b: 1, a: 1 })
    expect(list).toEqual([])
  })
})
