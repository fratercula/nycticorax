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
import classes from './index.less'

const key = Symbol('key')

createStore({ age: 0, name: 'abc', [key]: 'a' })

subscribe((keys) => {
  console.log('subscribe', keys)
  const s = getStore()

  console.log(s[key])

  if (s[key] === 'b') {
    s[key] = 'aaaa'
  }
})

function Hook() {
  const { name, age } = useStore('name', 'age')

  return (
    <div className={classes.com}>
      <h2>Hooks</h2>
      <p>
        <span>name:</span>
        {name}
      </p>
      <p>
        <span>age:</span>
        {age}
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch({ age: age + 1, [key]: 'b' })
        }}
      >
        Dispatch
      </button>
    </div>
  )
}

const setName: Dispatch = async ({ dispatch: dp, getStore: gs }, text) => {
  await new Promise((r) => setTimeout(r, 2000))
  dp({ name: text as string })
  return gs().name
}

const setAge: Dispatch = ({ dispatch: dp, getStore: gs }) => {
  const { age } = gs()
  dp({ age: age + 1 })
}

type TC = Connect & { desc: string }

class C0 extends Component<TC> {
  state = {
    loading: false,
  }

  setName = async () => {
    const { loading } = this.state
    if (loading) {
      return
    }

    this.setState({ loading: true })
    const { dispatch: dp } = this.props
    dp({ age: 1 })
    await dp(setName, Math.random().toString(36).substring(7))
    this.setState({ loading: false })
    console.log(getStore())
  }

  render() {
    const { age, name, desc } = this.props
    const { loading } = this.state

    const cs = loading ? classes.loading : ''

    return (
      <div className={classes.com}>
        <h2>{desc}</h2>
        <p>
          <span>name:</span>
          {name}
        </p>
        <p>
          <span>age:</span>
          {age}
        </p>
        <button
          className={cs}
          type="button"
          onClick={this.setName}
        >
          Async Dispatch
        </button>
      </div>
    )
  }
}

function F0(props: TC) {
  const {
    age, name, dispatch: dp, desc,
  } = props
  return (
    <div className={classes.com}>
      <h2>{desc}</h2>
      <p>
        <span>name:</span>
        {name}
      </p>
      <p>
        <span>age:</span>
        {age}
      </p>
      <button
        type="button"
        onClick={() => {
          dp(setAge)
        }}
      >
        Dispatch
      </button>
    </div>
  )
}

const C = connect('age', 'name')(C0)
const F = connect('age', 'name')(F0)

export default function () {
  return (
    <>
      <Hook />
      <C desc="Class Component" />
      <F desc="Function Component" />
    </>
  )
}
