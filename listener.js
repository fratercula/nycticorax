class Listener {
  strict = false

  index = 0

  store = {}

  callbacks = {}

  setStore = (store) => {
    if (Object.prototype.toString.call(store) === '[object Object]') {
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

  dispatch = (key, value) => {
    if (this.strict) {
      if (!(key in this.store)) {
        throw new Error(`store key: ${key} not exist`)
      }
    }

    this.store[key] = value
    Object.keys(this.callbacks).forEach((index) => {
      this.callbacks[index](key)
    })
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
