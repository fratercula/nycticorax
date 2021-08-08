import Nycticorax, { Dispatch } from './core'
import getConnect, { ConnectProps } from './connect'
import getHook from './hooks'

class N<T> extends Nycticorax<T> {
  connect = getConnect(this)

  useStore = getHook(this)
}

export default N
export type { Dispatch }
export type { ConnectProps }
