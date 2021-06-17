import Nycticorax, { Dispatch, Connect } from '../../src'

type Store = {
  name: string,
  age: number,
}

const nycticorax = new Nycticorax<Store>()

export const {
  createStore,
  getStore,
  dispatch,
  subscribe,
  connect,
  useStore,
} = nycticorax

export type Dispatcher = Dispatch<Store>
export type Connector = Connect<Store>
