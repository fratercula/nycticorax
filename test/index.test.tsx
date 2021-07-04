import React from 'react'
import { mount } from 'enzyme'
import Nycticorax from '../src'

type Store = { name: string, age: number }

const nycticorax = new Nycticorax<Store>()

const {
  createStore,
  // dispatch,
  // connect,
  useStore,
} = nycticorax

// type Connect = CT<Store>

createStore({ name: 'xyz', age: 1 })

describe('nycticorax', () => {
  it('hook', () => {
    function Hook() {
      const { name, age } = useStore('name', 'age')
      return (
        <div>
          <div>{name}</div>
          <div>{age}</div>
        </div>
      )
    }
    const wrapper = mount(<Hook />)
    expect(wrapper.render()).toMatchSnapshot()
  })
})
