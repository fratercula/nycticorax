import React, { ElementType, Component } from 'react'
import { NycticoraxType } from './nycticorax'

const ignoreStaticMethods = [
  'name',
  'prototype',
  'length',
  'propTypes',
  'defaultProps',
  'getDerivedStateFromProps',
]

function connect<T>(nycticorax: NycticoraxType<T>) {
  const {
    getStore,
    subscribe,
    dispatch,
  } = nycticorax

  return function(...keys: Partial<keyof T>[]) {
    return function(C: ElementType) {
      class R extends Component {
        private unsubscribe: () => void

        state = {
          props: getStore()
        }

        componentDidMount() {
          this.unsubscribe = subscribe((triggerKeys) => {
            const sames = keys.filter(k => triggerKeys.includes(k))
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

          return (
            <C
              dispatch={dispatch}
              {...props}
              {...this.props}
            />
          )
        }
      }

      Object
        .getOwnPropertyNames(C)
        .forEach((method) => {
          const key = method as keyof typeof C
          if (!ignoreStaticMethods.includes(method)) {
            R[key] = C[key]
          }
        })

      return R as ElementType
    }
  }
}

export default connect
