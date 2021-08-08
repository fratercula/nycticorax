import { useState, useLayoutEffect } from 'react'
import { NycticoraxType } from './core'

function hooks<T>(nycticorax: NycticoraxType<T>) {
  const { getStore, subscribe } = nycticorax

  return function (...keys: [Partial<keyof T>, ...Partial<keyof T>[]]) {
    const [props, setProps] = useState(getStore())

    useLayoutEffect(() => {
      const unsubscribe = subscribe((triggerKeys) => {
        const sames = keys.filter((k) => triggerKeys.includes(k))
        if (sames.length) {
          setProps(getStore())
        }
      })

      return unsubscribe
    })

    return props
  }
}

export default hooks
