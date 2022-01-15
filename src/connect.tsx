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

export type Connect<T> = {
  dispatch: (next: Partial<T> | Dispatch<T>, ...args: any[]) => unknown,
} & T

function connect<T extends object>(nycticorax: NycticoraxType<T>) {
  const {
    getStore,
    subscribe,
    dispatch,
  } = nycticorax

  type ConnectProps = Connect<T>

  return function (...keys: [Partial<keyof T>, ...Partial<keyof T>[]]) {
    return function<P extends ConnectProps> (C: ComponentType<P> & {
      [key: string]: any,
    }): ComponentType<Subtract<P, ConnectProps>> & {
      [key: string]: any,
    } {
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
