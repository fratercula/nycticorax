import eq from 'fast-deep-equal' // eslint-disable-line import/no-unresolved
import typeOf from './helper/typeof'
import clone from './helper/clone'
import warn from './helper/warn'

export default class {
  strict = false

  store = {}

  listeners = []

  ignores = []

  createStore = (store) => {
    if (typeOf(store) !== 'object') {
      throw new Error('Store data must be object')
    }

    this.store = store
    this.strict = true
    this.ignores = Object.keys(store)
      .filter(key => store[key] === undefined || store[key] === null)
  }

  subscribe = (listener) => {
    if (typeOf(listener) !== 'function') {
      throw new Error('Listener must be function')
    }
    this.listeners.push(listener)

    return () => {
      const listeners = this.listeners.slice()
      const index = listeners.indexOf(listener)
      if (index > -1) {
        listeners.splice(index, 1)
      }
      this.listeners = listeners
    }
  }

  dispatch = (next) => {
    const type = typeOf(next)

    if (type === 'function') {
      return next(this.dispatch, this.getStore)
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
          warn(`Dispatch key width same value: '${key}'`)
        }
      }

      if (actives.length) {
        this.listeners.forEach((listener) => {
          listener(actives)
        })
      } else {
        warn('Dispatch same keys and values, listeners will not be triggered', next)
      }

      return this.store
    }

    throw new Error('Dispatch type error, must be function or object')
  }

  getStore = (...keys) => {
    if (!keys.length) {
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
}
