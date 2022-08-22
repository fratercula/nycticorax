import Nycticorax, { Dispatch as DP } from '../../src'

export const symbolKey = Symbol('key')

export type Store = { name: string, age: number, [symbolKey]: string }

const nycticorax = new Nycticorax<Store>()

export const {
  createStore,
  getStore,
  dispatch,
  subscribe,
  connect,
  useStore,
  emit,
} = nycticorax

export type Dispatch = DP<Store>
