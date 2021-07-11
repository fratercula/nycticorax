import React, { Component, ComponentType } from 'react'
import { NycticoraxType, Dispatch } from './core'

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

type SetDifference<A, B> = A extends B ? never : A
type SetComplement<A, A1 extends A> = SetDifference<A, A1>
type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>
type CT<T> = ComponentType<T> & { [key: string]: any }

export type Connect<T> = {
  dispatch: (next: Partial<T> | Dispatch<T>, ...args: unknown[]) => void,
} & T

function connect<T>(nycticorax: NycticoraxType<T>) {
  const {
    getStore,
    subscribe,
    dispatch,
  } = nycticorax

  return function (...keys: [Partial<keyof T>, ...Partial<keyof T>[]]) {
    return function<P extends Connect<T>> (C: CT<P>) {
      class R extends Component<Subtract<P, Connect<T>>> {
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
            <C
              {...rest}
              // dispatch={dispatch}
              // {...props}
              // {...this.props as P}
            />
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

      return R as unknown as (new () => { [key in keyof R]: R[key] }) & {
        [key: string]: any,
      }
    }
  }
}

export default connect
