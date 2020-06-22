import Nycticorax from './nycticorax'
import getConnect from './connect'
import getUseStore from './use-store'

export const {
  dispatch,
  createStore,
  getStore,
  subscribe,
} = new Nycticorax()

export const connect = getConnect({ dispatch, getStore, subscribe })
export const useStore = getUseStore({ getStore, subscribe })

export default class extends Nycticorax {
  constructor() {
    super()
    this.connect = getConnect(this)
    this.useStore = getUseStore(this)
  }
}
