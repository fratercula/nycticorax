/* eslint-disable no-console */
import React, { Component } from 'react'
import {
  createStore,
  getStore,
  subscribe,
  Dispatch,
  Connect,
  connect,
  useStore,
  emit,
  symbolKey,
} from './store/react'
import classes from './index.less'

createStore({ age: 0, name: 'abc', [symbolKey]: 'a' })

subscribe({
  age(n, o) {
    console.log(n, o, 'age')
  },
  [symbolKey]: (n, o) => {
    console.log(n, o, 'symbolKey')
  },
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
          emit({ age: age + 1, [symbolKey]: 'b' })
        }}
      >
        Dispatch
      </button>
    </div>
  )
}

const setName: Dispatch = async ({ emit: dp, getStore: gs }, params) => {
  await new Promise((r) => setTimeout(r, 2000))
  dp({ name: params?.text as string })
  return gs().name
}

const setAge: Dispatch = async ({ emit: dp, getStore: gs }) => {
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
    const { emit: em, dispatch: dp } = this.props
    em({ age: 1 })
    await dp(setName, {
      text: Math.random().toString(36).substring(7),
    })
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
