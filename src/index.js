import Nycticorax from './nycticorax'
import getConnect from './connect'
import { getUseDispatch, getUseStore } from './hooks'

export const {
  dispatch,
  createStore,
  getStore,
  subscribe,
} = new Nycticorax()

export const connect = getConnect({ dispatch, getStore, subscribe })
export const useStore = getUseStore({ getStore, subscribe })
export const useDispatch = getUseDispatch({ dispatch })

export default class extends Nycticorax {
  constructor() {
    super()
    this.connect = getConnect(this)
    this.useStore = getUseStore(this)
    this.useDispatch = getUseStore(this)
  }
}
