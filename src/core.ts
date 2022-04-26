import eq from 'fast-deep-equal'

type Listener<T> = (keys: Partial<keyof T>[]) => void

export type Dispatch<T> = (
  nycticorax: {
    getStore: () => T,
    emit: (next: Partial<T>) => void,
  },
  params?: Record<string, any>,
) => Promise<unknown>

export type Emit<T> = (next: Partial<T>, sync?: boolean) => void

export type NycticoraxType<T extends object> = Nycticorax<T>

class Nycticorax<T extends object> {
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

  public getStore = (): T => {
    const keys = Reflect.ownKeys(this.state) as Partial<keyof T>[]
    const next = {} as T

    keys.forEach((key) => {
      next[key] = JSON.parse(JSON.stringify(this.state[key]))
    })

    return next
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

  public emit: Emit<T> = (next, sync) => {
    this.emits = { ...this.emits, ...next }
    if (sync) {
      this.trigger()
    } else {
      clearTimeout(this.timer as number)
      this.timer = setTimeout(this.trigger)
    }
  }

  public dispatch = (
    next: Dispatch<T>,
    params?: Record<string, any>,
  ) => next({
    getStore: this.getStore,
    emit: (o: Partial<T>) => this.emit(o, true),
  }, params)

  private trigger = () => {
    const next = this.emits
    const actives: Partial<keyof T>[] = []
    const keys = Reflect.ownKeys(next) as Partial<keyof T>[]

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
