import React, { Component, ComponentType } from 'react'
import { NycticoraxType, Dispatch } from './core'
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

export type ConnectProps<T> = {
  dispatch: (next: Partial<T> | Dispatch<T>, ...args: unknown[]) => void,
} & T

function connect<T>(nycticorax: NycticoraxType<T>) {
  const {
    getStore,
    subscribe,
    dispatch,
  } = nycticorax

  type Connect = ConnectProps<T>

  return function (...keys: [Partial<keyof T>, ...Partial<keyof T>[]]) {
    return function<P extends Connect> (C: ComponentType<P> & {
      [key: string]: any,
    }): ComponentType<Subtract<P, Connect>> & {
      [key: string]: any,
    } {
      class R extends Component<Subtract<P, Connect>> {
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
          const rest = Object.assign({ dispatch }, props, this.props as P)

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
