import typeOf from './helper/typeof'

class Listener {
  strict = false

  index = 0

  store = {}

  callbacks = {}

  setStore = (store) => {
    if (typeOf(store) === '[object Object]') {
      this.store = store
      this.strict = true
    } else {
      throw new Error('store must be object')
    }
  }

  register(id, callback) {
    this.callbacks[id] = callback
  }

  unregister(id) {
    delete this.callbacks[id]
  }

  dispatch = (next) => {
    const type = typeOf(next)

    if (type === '[object Function]') {
      return new Promise((resolve) => {
        next(this.dispatch, () => this.store, arg => resolve(arg))
      })
    } else if (type === '[object Object]') {
      const keys = Object.keys(next)

      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i]
        if (this.strict) {
          if (!(key in this.store)) {
            throw new Error(`store key: ${key} not exist`)
          }
          if (typeOf(this.store[key]) !== typeOf(next[key])) {
            throw new Error(`store key ${key} type mismatch`)
          }
        }
        this.store[key] = next[key]
      }

      Object.keys(this.callbacks).forEach((index) => {
        this.callbacks[index](keys)
      })
    } else {
      throw new Error('dispatch arguments type error')
    }
  }

  getStore = (keys) => {
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
    return JSON.parse(JSON.stringify(values))
  }
}

export default new Listener()
