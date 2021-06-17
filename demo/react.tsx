import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  createStore,
  getStore,
  dispatch,
  subscribe,
  Dispatcher,
  Connector,
  connect,
  useStore,
} from './store/react'

createStore({ age: 0, name: 'abc' })

function Hook() {
  const { name, age } = useStore('name', 'age')

  return (
    <div className="com">
      <p>{name}</p>
      <p>{age}</p>
      <button
        onClick={() => {
          dispatch({ age: 2 })
        }}
      >
        dispatch
      </button>
    </div>
  )
}

const setName: Dispatcher = async ({ dispatch, getStore }) => {
  await new Promise((r) => setTimeout(r, 1000))
  const { age } = getStore()
  dispatch({ age: age + 1 })
}

type TC = Connector & {
  desc: string
}

class C0 extends Component<TC> {
  a = () => {
    this.props.dispatch({ name: 'a' })
    this.props.dispatch(setName, 1)
  }

  render() {
    const { age, name, dispatch, desc } = this.props

    return (
      <>
        {age}
      </>
    )
  }
}

function F0(props: TC) {
  const { age, name, dispatch, desc } = props
  return (
    <>
      {age}
    </>
  )
}

const C = connect('age', 'name')(C0)
const F = connect('age', 'name')(F0)

render((
  <>
    <Hook />
    <C desc="test" />
    <F desc="test" />
  </>
), document.querySelector('#root'))
