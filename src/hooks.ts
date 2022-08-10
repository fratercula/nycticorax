import { useState, useLayoutEffect } from 'react'
import { NycticoraxType, Listener } from './core'

function hooks<T extends object>(nycticorax: NycticoraxType<T>) {
  const { getStore, subscribe } = nycticorax

  return function (...keys: [Partial<keyof T>, ...Partial<keyof T>[]]) {
    const [props, setProps] = useState(getStore())

    useLayoutEffect(() => {
      const unsubscribe = subscribe(
        keys.reduce((p, c) => ({
          ...p,
          [c]: () => {
            setProps(getStore())
          },
        }), {} as Listener<T>),
      )

      return unsubscribe
    })

    return props
  }
}

export default hooks
