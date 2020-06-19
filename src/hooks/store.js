import { getStore, subscribe } from '..'

let React
try {
  // eslint-disable-next-line global-require, import/no-unresolved
  React = require('react')
} catch (e) {
  // ignore
}

export default (...keys) => {
  if (!React) {
    return undefined
  }

  let result = getStore(...keys)

  React.useLayoutEffect(() => {

  })

  return result
}
