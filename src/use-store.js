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

    const [props, setProps] = React.useState(getStore(...keys))

    React.useLayoutEffect(() => {
      const unsubscribe = subscribe((triggerKeys) => {
        const sames = keys.filter(k => triggerKeys.includes(k))
        if (sames.length) {
          setProps(getStore(...keys))
        }
      })

      return unsubscribe
    })

    return props
  }
}
