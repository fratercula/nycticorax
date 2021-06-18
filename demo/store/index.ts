import Nycticorax, { Dispatch as DP } from '../../src/nycticorax'

type Store = {
  config: {
    type: string
    on: boolean
  },
  time: number
}

const nycticorax = new Nycticorax<Store>()

export const {
  createStore,
  getStore,
  dispatch,
  subscribe,
} = nycticorax

export type Dispatch = DP<Store>
