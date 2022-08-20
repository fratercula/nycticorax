import { useState, useLayoutEffect } from 'react'
import { KeyWithListener } from './core'
import type Nycticorax from './core'

function hooks<T extends object>(nycticorax: Nycticorax<T>) {
  const { getStore, subscribe } = nycticorax

  return function (...keys: (keyof T)[]) {
    const [props, setProps] = useState(getStore())

    useLayoutEffect(() => {
      const unsubscribe = subscribe(
        keys.reduce((p, c) => ({
          ...p,
          [c]: () => {
            setProps(getStore())
          },
        }), {} as KeyWithListener<T>),
      )

      return unsubscribe
    })

    return props
  }
}

export default hooks
