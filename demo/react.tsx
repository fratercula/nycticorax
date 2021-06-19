/* eslint-disable no-console */
import React, { Component } from 'react'
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
        type="button"
        onClick={() => {
          dispatch({ age: 2 })
        }}
      >
        dispatch
      </button>
    </div>
  )
}

const setName: Dispatch = async ({ dispatch: dp, getStore: gs }, text) => {
  await new Promise((r) => setTimeout(r, 1000))
  const { name } = gs()
  dp({ name: name + text })
}

const setAge: Dispatch = ({ dispatch: dp, getStore: gs }) => {
  const { age } = gs()
  dp({ age: age + 1 })
}

type TC = Connect & { desc: string }

class C0 extends Component<TC> {
  setName = async () => {
    const { dispatch: dp } = this.props
    await dp(setName, 'name')
    console.log(getStore())
  }

  render() {
    const { age, name, desc } = this.props

    return (
      <>
        <h2>
          type:
          {desc}
        </h2>
        <p>
          age:
          {age}
        </p>
        <p>
          name:
          {name}
        </p>
        <button type="button" onClick={this.setName}>dispatch</button>
      </>
    )
  }
}

function F0(props: TC) {
  const {
    age, name, dispatch: dp, desc,
  } = props
  return (
    <>
      <>
        <h2>
          type:
          {desc}
        </h2>
        <p>
          age:
          {age}
        </p>
        <p>
          name:
          {name}
        </p>
        <button
          type="button"
          onClick={() => {
            dp(setAge)
          }}
        >
          dispatch
        </button>
      </>
    </>
  )
}

const C = connect('age', 'name')(C0)
const F = connect('age', 'name')(F0)

export default function () {
  return (
    <>
      <Hook />
      <C desc="component" />
      <F desc="function" />
    </>
  )
}
