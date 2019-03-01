import typeOf from './helper/typeof'
import clone from './helper/clone'

class Nycticorax {
  strict = false

  index = 0

  store = {}

  listeners = {}

  ignores = []

  getId = () => {
    this.index += 1
    return this.index
  }

  createStore = (store) => {
    if (typeOf(store) === 'object') {
      this.store = store
      this.strict = true
      this.ignores = Object.keys(store).filter(key => typeOf(store[key]) === 'undefined')
    } else {
      throw new Error('store must be object')
    }
  }

  register = (id, listener) => {
    if (typeOf(listener) !== 'function') {
      throw new Error('listener must be function')
    }
    this.listeners[id] = listener
  }

  unregister = (id) => {
    delete this.listeners[id]
  }

  dispatch = (next) => {
    const type = typeOf(next)

    if (type === 'function') {
      return new Promise((resolve) => {
        next(this.dispatch, () => this.store, resolve)
      })
    }

    if (type === 'object') {
      const keys = Object.keys(next)

      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i]
        if (this.strict) {
          if (!(key in this.store)) {
            throw new Error(`dispatch key[${key}] not exist`)
          }
          if (!this.ignores.includes(key) && typeOf(this.store[key]) !== typeOf(next[key])) {
            throw new Error(`dispatch key[${key}] type mismatch`)
          }
        }
        this.store[key] = next[key]
      }

      Object.keys(this.listeners).forEach((id) => {
        this.listeners[id](keys)
      })

      return Promise.resolve()
    }

    throw new Error('dispatch arguments type error')
  }

  getStore = (keys) => {
    if (!keys) {
      return clone(this.store)
    }

    const values = {}

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i]
      if (this.strict) {
        if (!(key in this.store)) {
          throw new Error(`store key[${key}] no exist`)
        }
      }
      values[key] = this.store[key]
    }

    return clone(values)
  }

  reset = () => {
    this.store = {}
    this.strict = false
    this.listeners = {}
    this.index = 0
  }
}

export default new Nycticorax()
