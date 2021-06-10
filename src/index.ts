import Nycticorax, { Dispatch } from './nycticorax'
import getConnect from './connect'
import getHook from './hook'

class N<T> extends Nycticorax<T> {
  connect = getConnect(this)
  useStore = getHook(this)
}

export default N
export type { Dispatch }
