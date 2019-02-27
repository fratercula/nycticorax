import typeOf from './helper/typeof'
import clone from './helper/clone'

class Nycticorax {
  strict = false

  index = 0

  store = {}

  dispatchs = {}

  watchs = []

  watch = (watch) => {
    if (typeOf(watch) !== 'function') {
      throw new Error('watch must be function')
    }
    this.watchs.push(watch)
  }

  createStore = (store) => {
    if (typeOf(store) === 'object') {
      this.store = store
      this.strict = true
    } else {
      throw new Error('store must be object')
    }
  }

  register(id, dispatch) {
    this.dispatchs[id] = dispatch
  }

  unregister(id) {
    delete this.dispatchs[id]
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
            throw new Error(`store key: ${key} not exist`)
          }
          if (typeOf(this.store[key]) !== typeOf(next[key])) {
            throw new Error(`store type mismatch, key: ${key}`)
          }
        }
        this.store[key] = next[key]
      }

      this.watchs.forEach((watch) => {
        watch(keys, this.store)
      })

      Object.keys(this.dispatchs).forEach((id) => {
        this.dispatchs[id](keys)
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
          throw new Error(`store key: ${key} no exist`)
        }
      }
      values[key] = this.store[key]
    }

    return clone(values)
  }
}

export default new Nycticorax()
