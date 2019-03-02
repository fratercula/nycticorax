import typeOf from './typeof'

const { stringify } = JSON

export default (a, b) => {
  if (a === b) {
    return true
  }
  if (stringify(a) === stringify(b)) {
    return true
  }
  if (typeOf(a) === 'object' && typeOf(b) === 'object') {
    const x = {}
    const y = {}
    const ka = Object.keys(a).sort()
    const kb = Object.keys(b).sort()

    if (ka.join() !== kb.join()) {
      return false
    }

    ka.forEach((k) => { x[k] = a[k] })
    kb.forEach((k) => { y[k] = b[k] })

    if (stringify(x) === stringify(y)) {
      return true
    }
  }
  return false
}
