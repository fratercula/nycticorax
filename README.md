# nycticorax

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
    this.props.dispatch({ 'name': 'xyz' })
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
      <button onClick={() => dispatch({ name: 'jkl' })}>name</button>
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
} = nycticorax
```

without `React`

```ts
// not `connect` and `useStore`
import Nycticorax, { Dispatch as DP } from 'nycticorax/nycticorax'

type Store = { name: string }

const nycticorax = new Nycticorax<Store>()

const {
  createStore,
  getStore,
  dispatch,
  subscribe,
  connect,
} = nycticorax

type Dispatch = DP<Store>
```

### createStore

create store

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

### dispatch

update store

```ts
type dispatch = (next: Partial<T> | Function, ...args: unknown[]) => any;

// update store key `name`, value is `xyz`
dispatch({ name: 'xyz' })

// multiple key
dispatch({ name: 'xyz', another: 1 })

// dispatch function
const asyncDispatch: Dispatch = async ({ dispatch, getStore }, ...args) => {
  console.log(args)
  return new Promise((resolve) => {
    // get current store
    const { name } = getStore()

    // update name
    dispatch({ name: 'a' })

    setTimeout(() => {
      dispatch({ name: 'b' })

      // resolve
      resolve(name)
    }, 1000)
  })
}
dispatch(asyncDispatch, 'a', 'b').then(() => {
  dispatch({ name: 'c' })
}
```

by default, `dispatch` action will be `merged`

```js
// this
dispatch({ a: 1, b: 2 })
dispatch({ b: 1 })

// will be merged as
dispatch({ a: 1, b: 1 })
```

`dispatch` is `async`, but except dispatch function

```js
// async
createStore({ a: 1 })
dispatch({ a: 2 })
console.log(getStore('a')) // { a: 1 }
setTimeout(() => console.log(getStore('a'))) // { a: 2 }

function asyncDispatch({ dispatch, getStore }) {
  return new Promise((resolve) => {
    // update name
    dispatch({ name: 'a' }) // sync dispatch
    console.log(getStore('name')) // a

    setTimeout(() => {
      dispatch({ name: 'b' }) // sync dispatch
      console.log(getStore('name')) // b

      // resolve
      resolve(name)
    }, 1000)
  })
}
```

set `dispatch` to `sync`

```js
createStore({ a: 1 })
dispatch({ a: 2 }, true)
console.log(getStore('a')) // { a: 2 }
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

for `React` only

```tsx
type connect = (keys: (keyof T)[]) => (React.ComponentType) => React.ComponentType

class A extends Component<Connect> {
  onClick = () => {
    this.props.dispatch({ 'number': 1 })
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
      <button onClick={() => dispatch({ name: 'jkl' })}>x</button>
    </>
  )
}
```

## License

MIT
