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
    expect(nycticorax.getStore('a')).toEqual({})
  })

  it('dispatch widthout strict', () => {
    nycticorax.dispatch({ a: 1 }, 'sync')
    expect(nycticorax.getStore()).toEqual({ a: 1 })
  })

  it('create store', () => {
    reset()
    nycticorax.createStore({ a: 1 })
    expect(nycticorax.store).toEqual({ a: 1 })
    expect(nycticorax.strict).toBe(true)

    reset()
    expect(() => nycticorax.createStore('')).toThrowError(new Error('Store data must be object'))
  })

  it('get store', () => {
    reset()
    expect(nycticorax.getStore()).toEqual({})
    nycticorax.createStore({ a: 1, another: undefined })
    expect(nycticorax.store).toEqual({ a: 1 })
    expect(nycticorax.getStore('a')).toEqual({ a: 1 })
    expect(nycticorax.getStore('a', 'b')).toEqual({ a: 1 })
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

    nycticorax.dispatch({ a: 2 }, 'sync')
    expect(list).toEqual(['a'])

    reset()
    list = []
    nycticorax.createStore({ a: 2 })
    nycticorax.subscribe((keys) => {
      list = keys
    })
    nycticorax.dispatch({ b: 1 }, 'sync')
    nycticorax.dispatch({ a: 'a' }, 'sync')
    expect(list).toEqual([])

    list = []
    function asyncA({ dispatch, getStore }) {
      return new Promise((resolve) => {
        const { a } = getStore()
        dispatch({ b: 1 })
        setTimeout(() => {
          dispatch({ a: a + 1 })
          resolve()
        }, 100)
      })
    }

    nycticorax.dispatch(asyncA)
      .then(() => {
        expect(nycticorax.store).toEqual({ a: 3 })
        expect(list).toEqual(['a'])
      })

    reset()
    nycticorax.createStore({ a: 1, b: 1 })
    list = []
    nycticorax.subscribe((keys) => {
      list = keys
    })
    nycticorax.dispatch({ b: 1, a: 1 }, 'sync')
    expect(list).toEqual([])
  })

  it('async dispatch', (done) => {
    reset()

    let times = 0

    nycticorax.createStore({ a: 1, b: 1 })
    nycticorax.subscribe(() => {
      times += 1
    })
    nycticorax.dispatch({ a: 2 })
    nycticorax.dispatch({ b: 2 })

    setTimeout(() => {
      expect(nycticorax.store).toEqual({ a: 2, b: 2 })
      expect(times).toBe(1)
      done()
    })
  })
})
