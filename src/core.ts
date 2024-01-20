import eq from 'fast-deep-equal'

type Listener = (newValue: unknown, oldValue: unknown) => void
type ChangeValue<T> = Record<keyof T, [newValue: unknown, oldValue: unknown]>
type OnChange<T> = (value: ChangeValue<T>) => void
export type KeyWithListener<T> = Partial<Record<keyof T, Listener>>
export type KeyWithListeners<T> = Partial<Record<keyof T, Listener[]>>

/* istanbul ignore next */
function clone(data: any, clones = new WeakMap()) {
  if (typeof data !== 'object' || data === null) {
    return data
  }
  if (clones.has(data)) {
    return clones.get(data)
  }
  const res: any = Array.isArray(data) ? [] : {}
  clones.set(data, res)
  const keys = Reflect.ownKeys(data)
  for (const key of keys) {
    res[key] = clone(data[key], clones)
  }
  return res
}

function getStore<T extends object>(store: T) {
  return function getStore<K extends keyof T | undefined = undefined>(key?: K) {
    return (key ? clone(store[key!]) : store) as K extends keyof T ? T[K] : T
  }
}

export type Dispatch<T extends object> = (
  nycticorax: {
    getStore: ReturnType<typeof getStore<T>>,
    emit: (next: Partial<T>) => void,
  },
  ...params: any
) => Promise<any>

export default class Nycticorax<T extends object> {
  private state: T

  private listeners: KeyWithListeners<T>

  private emits: Partial<T>

  private timer: NodeJS.Timeout | undefined

  private onStateChange: OnChange<T>

  public getStore: ReturnType<typeof getStore<T>>

  constructor() {
    this.state = {} as T
    this.listeners = {}
    this.emits = {}
    this.timer = undefined
    this.onStateChange = () => null
    this.getStore = getStore(this.state)
  }

  public createStore = (state: T): void => {
    this.listeners = Reflect.ownKeys(state).reduce((p, c) => {
      const k = c as keyof T
      this.state[k] = state[k]
      return { ...p, [c]: [] }
    }, {} as KeyWithListeners<T>)
  }

  public subscribe = (listener: KeyWithListener<T>) => {
    const record = {} as KeyWithListener<T>

    Reflect.ownKeys(listener).forEach((key) => {
      const current = key as keyof T
      if (!this.listeners[current]) {
        this.listeners[current] = []
      }
      this.listeners[current]!.push(listener[current] as Listener)
      record[current] = listener[current]
    })

    return () => {
      Reflect.ownKeys(record).forEach((key) => {
        const current = key as keyof T
        this.listeners[current] = this.listeners[current]!.filter((t) => t !== record[current])
      })
    }
  }

  public set onChange(callback: OnChange<T>) {
    this.onStateChange = callback
  }

  public emit = (next: Partial<T>, sync?: boolean) => {
    this.emits = { ...this.emits, ...next }
    if (sync) {
      this.trigger()
    } else {
      clearTimeout(this.timer as NodeJS.Timeout)
      this.timer = setTimeout(this.trigger)
    }
  }

  public dispatch = (next: Dispatch<T>, ...params: any) => next({
    getStore: this.getStore,
    emit: (o: Partial<T>) => this.emit(o, true),
  }, ...params)

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

      this.state[key] = clone(next[key]) as T[keyof T]
      actives.push({ key, newValue, oldValue })
    }

    const changeValue = {} as ChangeValue<T>

    actives.forEach((item) => {
      changeValue[item.key] = [item.newValue, item.oldValue]
      if (this.listeners[item.key]) {
        this.listeners[item.key]!.forEach((fn) => fn(item.newValue, item.oldValue))
      }
    })

    if (actives.length) {
      this.onStateChange(changeValue)
    }

    this.emits = {} as T
    this.timer = undefined
  }
}
