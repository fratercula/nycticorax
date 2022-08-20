import Core, { Dispatch } from './core'
import getConnect, { Connect } from './connect'
import getHook from './hooks'

class Nycticorax<T extends object> extends Core<T> {
  connect = getConnect(this)

  useStore = getHook(this)
}

export default Nycticorax
export type { Dispatch }
export type { Connect }
