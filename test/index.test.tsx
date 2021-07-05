import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Nycticorax from '../src'

type Store = { name: string, age: number, other: boolean }

const nycticorax = new Nycticorax<Store>()

const {
  createStore,
  dispatch,
  // connect,
  useStore,
} = nycticorax

// type Connect = CT<Store>

createStore({ name: 'xyz', age: 1, other: false })

describe('nycticorax', () => {
  it('hook', async () => {
    function Hook() {
      const { name, age } = useStore('name', 'age')
      return (
        <div>
          <div className="name">{name}</div>
          <div className="age">{age}</div>
        </div>
      )
    }
    const wrapper = mount(<Hook />)
    let name = wrapper.findWhere((node) => node.text() === 'xyz' && node.hasClass('name'))
    expect(name).toHaveLength(1)

    const age = wrapper.findWhere((node) => node.text() === '1' && node.hasClass('age'))
    expect(age).toHaveLength(1)

    act(() => {
      dispatch({ name: 'abc' }, true)
      dispatch({ other: true }, true)
    })

    name = wrapper.findWhere((node) => node.text() === 'abc' && node.hasClass('name'))
    expect(name).toHaveLength(1)

    // expect(wrapper.render()).toMatchSnapshot()
  })
})
