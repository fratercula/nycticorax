import eq from 'fast-deep-equal'

type Listener<T> = (keys: Partial<keyof T>[]) => void

export type Dispatch<T> = (nycticorax: {
  getStore: () => T,
  dispatch: (next: Partial<T>) => void,
}, ...args: any[]) => unknown

export type NycticoraxType<T> = Nycticorax<T>

class Nycticorax<T> {
  private state: T

  private listeners: Listener<T>[]

  private emits: T

  private timer: ReturnType<typeof setTimeout> | number | undefined

  constructor() {
    this.state = {} as T
    this.listeners = []
    this.emits = {} as T
    this.timer = undefined
  }

  public createStore= (state: T): void => {
    this.state = state
  }

  public getStore = (): T => JSON.parse(JSON.stringify(this.state))

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

  public dispatch = (next: Partial<T> | Dispatch<T>, ...args: any[]): unknown => {
    const type = typeof next

    if (type === 'function') {
      return (next as Function)({
        dispatch: (o: Partial<T>) => this.dispatch(o, true),
        getStore: this.getStore,
      }, ...args)
    }

    this.emits = { ...this.emits, ...(next as Partial<T>) }

    if (args[0]) {
      this.emit()
    } else {
      clearTimeout(this.timer as number)
      this.timer = setTimeout(this.emit)
    }

    return undefined
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
