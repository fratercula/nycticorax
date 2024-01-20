import Nycticorax, { Dispatch as DP } from '../../src/core'

export const syb = Symbol('syb')

type Store = {
  config: {
    type: string,
    on: boolean,
  },
  time: number,
  array: number[],
  [syb]: string,
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

export default nycticorax

export type Dispatch = DP<Store>
