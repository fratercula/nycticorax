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
    expect(() => nycticorax.createStore('')).toThrowError(new Error('store must be object'))
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
    expect(() => nycticorax.getStore(['a', 'b'])).toThrowError(new Error('store key[b] no exist'))
  })

  it('register listener', () => {
    expect(Object.keys(nycticorax.listeners).length).toBe(0)
    const id = nycticorax.getId()
    nycticorax.register(id, () => null)
    expect(Object.keys(nycticorax.listeners).length).toBe(1)
    expect(() => nycticorax.register('')).toThrowError(new Error('listener must be function'))
    nycticorax.unregister(id)
    expect(Object.keys(nycticorax.listeners).length).toBe(0)
  })

  it('dispatch', () => {
    let list = []
    nycticorax.register(nycticorax.getId(), (keys) => {
      list = keys
    })
    expect(() => nycticorax.dispatch('')).toThrowError(new Error('dispatch arguments type error'))

    nycticorax.dispatch({ a: 2 })
    expect(list).toEqual(['a'])

    expect(() => nycticorax.dispatch({ b: 1 })).toThrowError(new Error('dispatch key[b] not exist'))
    expect(() => nycticorax.dispatch({ a: 'a' })).toThrowError(new Error('dispatch key[a] type mismatch'))

    nycticorax.dispatch({ another: 1 })
    expect(nycticorax.store.another).toBe(1)

    list = []

    function asyncA() {
      return (dispatch, getStore, next) => {
        const { a } = getStore()
        setTimeout(() => {
          dispatch({ a: a + 1 })
          next()
        }, 100)
      }
    }

    nycticorax.dispatch(asyncA())
      .then(() => {
        expect(list).toEqual(['a'])
      })
  })
})
