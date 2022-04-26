import React, { Component, ComponentType } from 'react'
import { NycticoraxType, Dispatch, Emit } from './core'
import { Subtract } from './types'

const ignoreStaticMethods = [
  'name',
  'prototype',
  'length',
  'propTypes',
  'defaultProps',
  'getDerivedStateFromProps',
  'contextTypes',
  'displayName',
]

export type Connect<T> = {
  emit: Emit<T>,
  dispatch: (next: Dispatch<T>, params?: Record<string, any>) => Promise<unknown>,
} & T

function connect<T extends object>(nycticorax: NycticoraxType<T>) {
  const {
    getStore,
    subscribe,
    dispatch,
    emit,
  } = nycticorax

  type ConnectProps = Connect<T>

  return function (...keys: [Partial<keyof T>, ...Partial<keyof T>[]]) {
    return function<P extends ConnectProps> (
      C: ComponentType<P> & Record<string, any>,
    ): ComponentType<Subtract<P, ConnectProps>> & Record<string, any> {
      class R extends Component<Subtract<P, ConnectProps>> {
        private unsubscribe: () => void

        state = {
          props: getStore(),
        }

        componentDidMount() {
          this.unsubscribe = subscribe((triggerKeys) => {
            const sames = keys.filter((k) => triggerKeys.includes(k))
            if (sames.length) {
              this.setState({ props: getStore() })
            }
          })
        }

        componentWillUnmount() {
          this.unsubscribe()
        }

        render() {
          const { props } = this.state
          // eslint-disable-next-line prefer-object-spread
          const rest = Object.assign({ dispatch, emit }, props, this.props as P)

          return (
            <C {...rest} />
          )
        }
      }

      Object
        .getOwnPropertyNames(C)
        .forEach((method) => {
          const key = method as keyof typeof R
          if (!ignoreStaticMethods.includes(method)) {
            R[key] = C[key]
          }
        })

      return R
    }
  }
}

export default connect
