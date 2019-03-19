import Nycticorax from './nycticorax'
import getConnect from './connect'

export const {
  dispatch,
  createStore,
  getStore,
  subscribe,
} = new Nycticorax()

export const connect = getConnect({ dispatch, getStore, subscribe })

export default class extends Nycticorax {
  constructor() {
    super()
    this.connect = getConnect(this)
  }
}
