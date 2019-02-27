import nycticorax from '../nycticorax'

describe('nycticorax', () => {
  it('get id', () => {
    const id = nycticorax.getId()
    expect(id).toEqual(1)
  })
})
