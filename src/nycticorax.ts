import eq from 'fast-deep-equal'

type UnSubscribe = () => void
type Listener<T> = (keys: Partial<keyof T>[]) => void

class Nycticorax<T> {
  private state: T
  private listeners: Listener<T>[]
  private emits: T
  private timer: undefined | ReturnType<typeof setTimeout>

  constructor() {
    this.state = {} as T
    this.listeners = []
    this.emits = {} as T
    this.timer = undefined
  }

  public createStore= (state: T): void => {
    this.state = state
  }

  public getStore = (): T => {
    return JSON.parse(JSON.stringify(this.state))
  }

  public subscribe = (listener: Listener<T>): UnSubscribe => {
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

  public dispatch = (
    next: Partial<T> | Function,
    ...args: any
  ): Function | never | void => {
    const type = typeof next

    if (type === 'function') {
      return (next as Function)({
        dispatch: (o: T) => this.dispatch(o, true),
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

      return
    }

    throw new Error('dispatch type error, function or object')
  }

  private emit = (): void => {
    const next = this.emits
    const actives: Partial<keyof T>[] = []
    const keys = Object.keys(next) as Partial<keyof T>[]

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i]
      if (!(key in this.state)) {
        continue
      }

      if (eq(this.state[key], next[key])) {
        continue
      }

      this.state[key] = next[key]
      actives.push(key)
    }

    if (actives.length) {
      this.listeners.forEach((listener) => listener(actives))
    }

    this.emits = {} as T
    this.timer = undefined
  }
}

export default Nycticorax




const n = new Nycticorax<{ a: number, b: string }>()

n.createStore({ a: 1, b: '1' })

n.getStore()

n.dispatch({ a: 1 }, false)

const un = n.subscribe((keys) => {
  console.log(keys)
})

un()

async function a({ dispatch, getStore }, ...args) {
  console.log(args)
  const { a } = getStore()
  dispatch({ a: a + 1 })
}

n.dispatch(a, '1').then(() => {
  n.dispatch({ b: '2' })
})
