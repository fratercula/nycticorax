import eq from 'fast-deep-equal'

type ListenFn = (newValue: unknown, oldValue: unknown) => void
export type Listener<T> = Partial<Record<keyof T, ListenFn>>

export type Dispatch<T> = (
  nycticorax: {
    getStore: () => T,
    emit: (next: Partial<T>) => void,
  },
  params?: any,
) => Promise<any>

export type Dispatcher<T> = (next: Dispatch<T>, params?: any) => Promise<any>

export type Emiter<T> = (next: Partial<T>, sync?: boolean) => void

export type NycticoraxType<T extends object> = Nycticorax<T>

class Nycticorax<T extends object> {
  private state: T

  private listeners: Record<keyof T, ListenFn[]>

  private emits: T

  private timer: NodeJS.Timeout | undefined

  constructor() {
    this.state = {} as T
    this.listeners = {} as Record<keyof T, ListenFn[]>
    this.emits = {} as T
    this.timer = undefined
  }

  public createStore= (state: T): void => {
    this.listeners = Reflect.ownKeys(state)
      .reduce((p, c) => ({ ...p, [c]: [] }), {} as Record<keyof T, ListenFn[]>)
    this.state = state
  }

  public getStore = (): T => {
    const keys = Reflect.ownKeys(this.state) as Partial<keyof T>[]
    const next = {} as T

    keys.forEach((key) => {
      const value = this.state[key]
      if (value !== undefined) {
        next[key] = JSON.parse(JSON.stringify(value))
      }
    })

    return next
  }

  public subscribe = (listeners: Listener<T>) => {
    const record = {} as Listener<T>
    const stateKeys = Reflect.ownKeys(this.state)

    Reflect.ownKeys(listeners).forEach((key) => {
      const current = key as keyof T
      if (stateKeys.includes(key)) {
        this.listeners[current].push(listeners[current] as ListenFn)
        record[current] = listeners[current]
      }
    })

    return () => {
      Reflect.ownKeys(record).forEach((key) => {
        const current = key as keyof T
        this.listeners[current] = this.listeners[current].filter((item) => item !== record[current])
      })
    }
  }

  public emit: Emiter<T> = (next, sync) => {
    this.emits = { ...this.emits, ...next }
    if (sync) {
      this.trigger()
    } else {
      clearTimeout(this.timer as NodeJS.Timeout)
      this.timer = setTimeout(this.trigger)
    }
  }

  public dispatch: Dispatcher<T> = (next, params) => next({
    getStore: this.getStore,
    emit: (o: Partial<T>) => this.emit(o, true),
  }, params)

  private trigger = () => {
    const next = this.emits
    const actives: { key: keyof T, newValue: unknown, oldValue: unknown }[] = []
    const keys = Reflect.ownKeys(next) as Partial<keyof T>[]

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i]

      if (eq(this.state[key], next[key])) {
        continue
      }

      const newValue = next[key]
      const oldValue = this.state[key]

      this.state[key] = next[key]
      actives.push({ key, newValue, oldValue })
    }

    actives.forEach((item) => {
      this.listeners[item.key].forEach((fn) => fn(item.newValue, item.oldValue))
    })

    this.emits = {} as T
    this.timer = undefined
  }
}

export default Nycticorax
