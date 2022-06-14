import Nycticorax, { Dispatch as DP } from '../../src/core'

type Store = {
  config: {
    type: string,
    on: boolean,
  },
  time: number,
  test?: string,
}

const nycticorax = new Nycticorax<Store>()

export const {
  createStore,
  getStore,
  dispatch,
  subscribe,
  emit,
} = nycticorax

export type Dispatch = DP<Store>
