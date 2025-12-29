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
  // These are static lifecycle methods that should not be copied
  'getDerivedStateFromProps',
  'getDerivedStateFromError',
]

function connect<T extends object>(nycticorax: Nycticorax<T>) {
  const { getStore, subscribe } = nycticorax

  return function (...keys: (keyof T)[]) {
    return function<P extends T> (
      C: ComponentType<P> & AnyObject,
    ): ComponentType<Subtract<P, T>> & AnyObject {
      class R extends Component<Subtract<P, T>> {
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
          const rest = { ...props, ...this.props as P }

          return (
            <C {...rest} />
          )
        }
      }

      // Copy static properties while preserving property descriptors
      // Use Reflect.ownKeys to get all keys including symbols
      Reflect.ownKeys(C).forEach((key) => {
        const method = String(key)
        if (!ignoreStaticMethods.includes(method)) {
          const descriptor = Object.getOwnPropertyDescriptor(C, key)
          if (descriptor) {
            Object.defineProperty(R, key, descriptor)
          }
        }
      })

      return R
    }
  }
}

export default connect
