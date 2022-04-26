import Nycticorax, { Dispatch as DP, Connect as CT } from '../../src'

export const symbolKey = Symbol('key')

type Store = { name: string, age: number, [symbolKey]: string }

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
export type Connect = CT<Store>
