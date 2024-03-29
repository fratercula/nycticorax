/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Nycticorax from '../src'

type Store = { name: string, age: number, other: boolean }

const nycticorax = new Nycticorax<Store>()

const {
  createStore,
  connect,
  useStore,
  emit,
} = nycticorax

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
      emit({ name: 'abc' }, true)
      emit({ other: true }, true)
    })

    name = wrapper.findWhere((node) => node.text() === 'abc' && node.hasClass('name'))
    expect(name).toHaveLength(1)

    // expect(wrapper.render()).toMatchSnapshot()
  })

  it('connect', () => {
    type S = () => string
    class C0 extends Component<Store> {
      public static setAge: S = () => 'a'

      setName = () => {
        emit({ name: 'jkl' }, true)
        emit({ other: false }, true)
      }

      render() {
        const { name } = this.props
        return (
          <>
            <div className="name">{name}</div>
            <button type="button" onClick={this.setName} className="button">x</button>
          </>
        )
      }
    }

    const C = connect('name')(C0)
    expect(C.setAge()).toBe('a')

    const wrapper = mount(<C />)

    let name = wrapper.findWhere((node) => node.text() === 'abc' && node.hasClass('name'))
    expect(name).toHaveLength(1)

    act(() => {
      wrapper.find('.button').simulate('click')
    })

    name = wrapper.findWhere((node) => node.text() === 'jkl' && node.hasClass('name'))
    expect(name).toHaveLength(1)

    expect(() => {
      wrapper.unmount()
    }).not.toThrow()
  })
})
