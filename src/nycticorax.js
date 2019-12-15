/* eslint-disable no-continue */

import eq from 'fast-deep-equal' // eslint-disable-line import/no-unresolved
import typeOf from './helper/typeof'
import clone from './helper/clone'
import warn from './helper/warn'

export default class {
  strict = false

  store = {}

  listeners = []

  ignores = []

  timer = null

  emits = {}

  createStore = (store) => {
    if (typeOf(store) !== 'object') {
      throw new Error('Store data must be object')
    }

    if (!Object.keys(store).length) {
      throw new Error('Store data should not be empty')
    }

    this.store = store
    this.strict = true
    this.ignores = Object.keys(store).filter(key => store[key] === undefined)
  }

  subscribe = (listener) => {
    if (!typeOf(listener).includes('function')) {
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

  dispatch = (next, ...args) => {
    const type = typeOf(next)

    if (type.includes('function')) {
      return next({
        dispatch: o => this.dispatch(o, true),
        getStore: this.getStore,
      }, ...args)
    }

    if (type === 'object') {
      this.emits = { ...this.emits, ...next }

      if (args[0]) {
        this.emit()
      } else {
        clearTimeout(this.timer)
        this.timer = setTimeout(this.emit)
      }

      return undefined
    }

    throw new Error('Dispatch type error, must be function or object')
  }

  emit = () => {
    const next = this.emits
    const keys = Object.keys(next)
    const actives = []

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i]

      if (this.strict) {
        if (!(key in this.store)) {
          warn(`Dispatch key not exist: '${key}'`)
          continue
        }
        if (!this.ignores.includes(key) && typeOf(this.store[key]) !== typeOf(next[key])) {
          warn(`Dispatch key type mismatch: '${key}'`)
          continue
        }
      }

      if (eq(this.store[key], next[key])) {
        warn(`Dispatch key width same value: '${key}'`)
        continue
      }

      this.store[key] = next[key]
      actives.push(key)
    }

    if (actives.length) {
      this.listeners.forEach((listener) => {
        listener(actives)
      })
    } else {
      warn('Dispatch same keys and values, listeners will not be triggered', next)
    }

    this.emits = {}
    this.timer = null
  }

  getStore = () => clone(this.store)
}
