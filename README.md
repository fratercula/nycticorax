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

For React, it is simple use, **not** `Provider`, `reducer`, `action`, **only** `connect`. `useStore` for Hooks


```tsx
import React, { Component } from 'react'
import Nycticorax from 'nycticorax'

type Store = { name: string, age: number }

const nycticorax = new Nycticorax<Store>()

const {
  createStore,
  dispatch,
  connect,
  useStore,
  emit,
} = nycticorax

createStore({ age: 0, name: 'abc' })

class A0 extends Component<Store> {
  onClick = () => {
    emit({ 'name': 'xyz' })
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
import Nycticorax, { Dispatch as DP } from 'nycticorax'

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

create store

```ts
type createStore = (state: T) => void

createStore({ name: 'nycticorax', [Symbol('key')]: 'symbol' })
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

watch key change

```ts
type Listener = (newValue: unknown, oldValue: unknown) => void;
type KeyWithListener<T> = Partial<Record<keyof T, Listener>>;
type subscribe: (listener: KeyWithListener<T>) => () => void;

const unsubscribe = subscribe({
  time(newValue, oldValue) {
    console.log(newValue, oldValue)
  },
})
unsubscribe() // unsubscribe
```

### onChange

watch store change

```ts
type ChangeValue<T> = Record<keyof T, [newValue: unknown, oldValue: unknown]>;
type OnChange<T> = (value: ChangeValue<T>) => void;

const nycticorax = new Nycticorax<Store>()

nycticorax.onChange = (v) => {
  console.log(v, 'onChange')
}
```

### connect

for `React` only

> class component cannot props `symbol` key, use `getStore` get symbol key`s value
> https://github.com/facebook/react/issues/7552

```tsx
type connect = (keys: (keyof T)[]) => (React.ComponentType) => React.ComponentType

const symbolKey = Symbol('key')

class A extends Component<Store> {
  render() {
    const { name, another } = this.props
    const store = getStore()
    return (
      <div>
        <h2>Component A</h2>
        <p>name: {name}</p>
        <p>{store[symbolKey]}</p>
      </div>
    )
  }
}

export default connect('name', symbolKey)(A)
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
