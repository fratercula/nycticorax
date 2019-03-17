import eq from 'fast-deep-equal' // eslint-disable-line import/no-unresolved
import typeOf from './helper/typeof'
import clone from './helper/clone'
import warn from './helper/warn'

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
      this.ignores = Object.keys(store)
        .filter(key => store[key] === undefined || store[key] === null)
    } else {
      throw new Error('Store data must be object')
    }
  }

  register = (id, listener) => {
    if (typeOf(listener) !== 'function') {
      throw new Error('Listener must be function')
    }
    this.listeners[id] = listener
  }

  unregister = (id) => {
    delete this.listeners[id]
  }

  dispatch = (next) => {
    const type = typeOf(next)

    if (type === 'function') {
      return next(this.dispatch, () => this.store)
    }

    if (type === 'object') {
      const keys = Object.keys(next)
      const actives = []

      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i]
        if (this.strict) {
          if (!(key in this.store)) {
            throw new Error(`Dispatch key not exist: '${key}'`)
          }
          if (!this.ignores.includes(key) && typeOf(this.store[key]) !== typeOf(next[key])) {
            throw new Error(`Dispatch key type mismatch: '${key}'`)
          }
        }
        if (!eq(this.store[key], next[key])) {
          this.store[key] = next[key]
          actives.push(key)
        } else {
          warn(`Dispatch same value: '${key}'`)
        }
      }

      if (actives.length) {
        Object.keys(this.listeners).forEach((id) => {
          this.listeners[id](actives)
        })
      } else {
        warn('Dispatch values same width current store, listeners will not be triggered', next)
      }

      return this.store
    }

    throw new Error('Dispatch type error, must be function or object')
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
          throw new Error(`Store key no exist: '${key}'`)
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
    this.ignores = []
  }
}

export default new Nycticorax()
