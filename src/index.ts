import Nycticorax, { Dispatch } from './nycticorax'
import getConnect, { Connect } from './connect'
import getHook from './hook'

class N<T> extends Nycticorax<T> {
  connect = getConnect(this)

  useStore = getHook(this)
}

export default N
export type { Dispatch }
export type { Connect }
