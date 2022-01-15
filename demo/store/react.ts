import Nycticorax, { Dispatch as DP, Connect as CT } from '../../src'

type Store = { name: string, age: number, [key: symbol]: string }

const nycticorax = new Nycticorax<Store>()

export const {
  createStore,
  getStore,
  dispatch,
  subscribe,
  connect,
  useStore,
} = nycticorax

export type Dispatch = DP<Store>
export type Connect = CT<Store>
