# nycticorax

[![Build Status](https://github.com/fratercula/nycticorax/actions/workflows/ci.yml/badge.svg)](https://github.com/fratercula/nycticorax/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/fratercula/nycticorax/branch/master/graph/badge.svg)](https://codecov.io/gh/fratercula/nycticorax)

State container for JavaScript application, and React

https://fratercula.github.io/nycticorax/

## Install

```bash
$ npm i nycticorax
```

## Usage

For React, it is simple use, **not** `Provider`, `reducer`, `action`, **only** `connect`


```tsx
import React, { Component } from 'react'
import Nycticorax, { Connect as CT } from 'nycticorax'

type Store = { name: string, age: number }

const nycticorax = new Nycticorax<Store>()

type Connect = CT<Store>

const {
  createStore,
  dispatch,
  connect,
  useStore,
} = nycticorax

createStore({ age: 0, name: 'abc' })

class A0 extends Component<Connect> {
  onClick = () => {
    this.props.emit({ 'name': 'xyz' })
  }

  render() {
    const { name } = this.props
    return (
      <div>
        <p>{name}</p>
        <button onClick={this.onClick}>set</button>
      </div>
    )
  }
}

const A = connect('name')(A0)

// Hooks
function B() {
  const { name } = useStore('name')

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => emit({ name: 'jkl' })}>name</button>
    </div>
  )
}

export default () => (
  <>
    <A />
    <B />
  </>
)
```

## API

width typescript

```ts
import Nycticorax, { Dispatch as DP, Connect as CT } from 'nycticorax'

type Store = { name: string }

const nycticorax = new Nycticorax<Store>()

const {
  createStore,
  getStore,
  dispatch,
  subscribe,
  connect,
  useStore,
  emit,
} = nycticorax

type Dispatch = DP<Store>
type Connect = CT<Store>
```

width javascript

```js
import Nycticorax from 'nycticorax'

const nycticorax = new Nycticorax()

const {
  createStore,
  getStore,
  dispatch,
  subscribe,
  connect,
  useStore,
  emit,
} = nycticorax
```

without `React`

```ts
// not `connect` and `useStore`
import Nycticorax, { Dispatch as DP } from 'nycticorax/core'

type Store = { name: string }

const nycticorax = new Nycticorax<Store>()

const {
  createStore,
  getStore,
  dispatch,
  subscribe,
  emit,
} = nycticorax

type Dispatch = DP<Store>
```

### createStore

create store, support symbol

```ts
type createStore = (state: T) => void

createStore({ name: 'nycticorax' })
```

### getStore

get store

```ts
type getStore = () => T

const store = getStore() // { name: 'nycticorax' }
```

### emit

update store

```ts
type emit = (next: Partial<T>, params: Record<string, any>) => void;

// update store key `name`, value is `xyz`
emit({ name: 'xyz' })

// multiple key
emit({ name: 'xyz', another: 1 })
```

by default, `emit` action will be `merged`

```js
emit({ a: 1, b: 2 })
emit({ b: 1 })

// will be merged as
emit({ a: 1, b: 1 })
```

set `emit` to `sync`

```js
createStore({ a: 1 })
emit({ a: 2 }, true)
console.log(getStore('a')) // { a: 2 }
```

### dispatch

```ts
const asyncDispatch: Dispatch = async ({ emit, getStore }, params) => {
  console.log(params)
  return new Promise((resolve) => {
    // get current store
    const { name } = getStore()

    // update name
    emit({ name: 'a' })

    setTimeout(() => {
      emit({ name: 'b' })

      // resolve
      resolve(name)
    }, 1000)
  })
}
dispatch(asyncDispatch, { a: 'b' }).then((name) => {
  console.log(name)
}
```

sync `emit`

```js
// async
createStore({ a: 1 })
emit({ a: 2 })
console.log(getStore('a')) // { a: 1 }
setTimeout(() => console.log(getStore('a'))) // { a: 2 }

function asyncDispatch({ emit, getStore }) {
  return new Promise((resolve) => {
    // update name
    emit({ name: 'a' }) // sync dispatch
    console.log(getStore('name')) // a

    setTimeout(() => {
      emit({ name: 'b' }) // sync dispatch
      console.log(getStore('name')) // b

      // resolve
      resolve(name)
    }, 1000)
  })
}
```

### subscribe

watching store change

```ts
type Listener<T> = (keys: Partial<keyof T>[]) => void;
type subscribe = (listener: Listener<T>) => () => void;

const unsubscribe = subscribe((keys) => {
  console.log(keys) // change keys
})
unsubscribe() // unsubscribe
```

### connect

for `React` only，class component 可以检测 symbol 的变动，但不能直接获取到，需要通过 getStore

```tsx
type connect = (keys: (keyof T)[]) => (React.ComponentType) => React.ComponentType

class A extends Component<Connect> {
  onClick = () => {
    this.props.emit({ 'number': 1 })
  }

  render() {
    const { name, another } = this.props
    return (
      <div>
        <h2>Component A</h2>
        <p>name: {name}</p>
        <p>Click to change value: Number</p>
        <button onClick={this.onClick}>set Number 1</button>
      </div>
    )
  }
}

export default connect('name', 'another')(A)
```

### useStore

for `React` only

```tsx
type useStore = ((keyof T)[]) => T

function B() {
  const { name } = useStore('name')
  return (
    <>
      <p>{name}</p>
      <button onClick={() => emit({ name: 'jkl' })}>x</button>
    </>
  )
}
```

## License

MIT
