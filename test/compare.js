import compare from '../src/helper/compare'

describe('compare', () => {
  it('same value', () => {
    expect(compare(1, 1)).toBe(true)
    expect(compare([], [])).toBe(true)
    expect(compare({}, {})).toBe(true)
    expect(compare(null, null)).toBe(true)
    expect(compare(undefined, undefined)).toBe(true)
    expect(compare(true, true)).toBe(true)
  })

  it('different types', () => {
    expect(compare(null, undefined)).toBe(false)
    expect(compare([], {})).toBe(false)
    expect(compare(2, false)).toBe(false)
  })

  it('array', () => {
    expect(compare([], [1])).toBe(false)
  })

  it('object', () => {
    expect(compare({ a: 1, b: 2 }, { a: 1 })).toBe(false)
    expect(compare({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
    expect(compare({ a: 1, b: 3 }, { b: 2, a: 1 })).toBe(false)
  })
})
