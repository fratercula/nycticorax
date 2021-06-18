import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  createStore,
  getStore,
  dispatch,
  subscribe,
  Dispatch,
  Connect,
  connect,
  useStore,
} from './store/react'

createStore({ age: 0, name: 'abc' })

subscribe((keys) => {
  console.log('subscribe', keys)
})

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

const setName: Dispatch = async ({ dispatch, getStore }, text) => {
  await new Promise((r) => setTimeout(r, 1000))
  const { name } = getStore()
  dispatch({ name: name + text })
}

const setAge: Dispatch = ({ dispatch, getStore }) => {
  const { age } = getStore()
  dispatch({ age: age + 1 })
}

type TC = Connect & {
  desc: string
}

class C0 extends Component<TC> {
  setName = async () => {
    await this.props.dispatch(setName, 'name')
    console.log(getStore())
  }

  render() {
    const { age, name, desc } = this.props

    return (
      <>
        <h2>type: {desc}</h2>
        <p>age: {age}</p>
        <p>name: {name}</p>
        <button onClick={this.setName}>dispatch</button>
      </>
    )
  }
}

function F0(props: TC) {
  const { age, name, dispatch, desc } = props
  return (
    <>
      <>
        <h2>type: {desc}</h2>
        <p>age: {age}</p>
        <p>name: {name}</p>
        <button onClick={() => {
          dispatch(setAge)
        }}>dispatch</button>
      </>
    </>
  )
}

const C = connect('age', 'name')(C0)
const F = connect('age', 'name')(F0)

render((
  <>
    <Hook />
    <C desc="component" />
    <F desc="function" />
  </>
), document.querySelector('#root'))
