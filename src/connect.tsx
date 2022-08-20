import React, { Component, ComponentType } from 'react'
import { KeyWithListener } from './core'
import type Nycticorax from './core'

type AnyObject = Record<string, any>
type SetDifference<A, B> = A extends B ? never : A
type SetComplement<A, A1 extends A> = SetDifference<A, A1>
type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>

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

export type Connect<T extends object> = Pick<Nycticorax<T>, 'dispatch' | 'emit'> & T

function connect<T extends object>(nycticorax: Nycticorax<T>) {
  const {
    getStore,
    subscribe,
    dispatch,
    emit,
  } = nycticorax

  return function (...keys: (keyof T)[]) {
    return function<P extends Connect<T>> (
      C: ComponentType<P> & AnyObject,
    ): ComponentType<Subtract<P, Connect<T>>> & AnyObject {
      class R extends Component<Subtract<P, Connect<T>>> {
        private unsubscribe: () => void

        constructor(props: any) {
          super(props)
          this.unsubscribe = subscribe(
            keys.reduce((p, c) => ({
              ...p,
              [c]: () => {
                this.setState({ props: getStore() })
              },
            }), {} as KeyWithListener<T>),
          )
        }

        state = {
          props: getStore(),
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
