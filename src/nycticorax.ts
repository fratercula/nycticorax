import eq from 'fast-deep-equal'

type Listener<T> = (keys: Partial<keyof T>[]) => void
type Dispatcher<T> = (nycticorax: Nycticorax<T>, ...args: unknown[]) => void

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

  public subscribe = (listener: Listener<T>) => {
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
    next: Partial<T> | Dispatcher<T>,
    ...args: unknown[]
  ) => {
    const type = typeof next

    if (type === 'function') {
      return (next as Function)({
        dispatch: (o: Partial<T> ) => this.dispatch(o, true),
        getStore: this.getStore,
      })
    }

    if (type === 'object') {
      this.emits = { ...this.emits, ...(next as Partial<T>) }

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

  private emit = () => {
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



type Store = { a: number, b: string }

const n = new Nycticorax<Store>()

n.createStore({ a: 1, b: '1' })

n.getStore()

n.dispatch({ a: 1, b: '1' }, false)

const un = n.subscribe((keys) => {
  console.log(keys)
})

un()

const a: Dispatcher<Store> = async ({ dispatch, getStore }, ...args) => {
  console.log(args[0] + '2')
  const { b } = getStore()
  dispatch({ b: b + '1' })
}

n.dispatch(a, 1, 2).then(() => {
  n.dispatch({ b: '2', a: 1 })
})
