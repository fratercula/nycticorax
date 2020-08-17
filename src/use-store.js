import warn from './helper/warn'

export default ({ getStore, subscribe }) => {
  let React
  try {
    // eslint-disable-next-line global-require, import/no-unresolved
    React = require('react')
  } catch (e) {
    // ignore
  }

  return (...keys) => {
    if (!React) {
      return undefined
    }

    if (!keys.length) {
      warn('you should provide the store keys')
    }

    const [props, setProps] = React.useState(getStore())

    React.useLayoutEffect(() => {
      const unsubscribe = subscribe((triggerKeys) => {
        const sames = keys.filter(k => triggerKeys.includes(k))
        if (sames.length) {
          setProps(getStore())
        }
      })

      return unsubscribe
    })

    return props
  }
}
