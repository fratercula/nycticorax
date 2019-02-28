# nycticorax

React store

## Install

```bash
$ npm i nycticorax
```

## Usage

very simple use, **not** `Provider`, `reducer`, `action`

only `connect`

```js
import React, { Component } from 'react'
import { connect } from 'nycticorax'

class A extends Component {
  onClick = () => {
    this.props.dispatch({ 'name': 1 }) // update
  }

  render() {
    const { name } = this.props // props
    return (
      <div>
        <p>{name}</p>
        <button onClick={this.onClick}>set</button>
      </div>
    )
  }
}

export default connect('name')(A) // connect
```

## API

```js
import {
  dispatch,
  createStore,
  getStore,
  register,
  unregister,
  getId,
  resetStore,
  connect,
} from 'nycticorax'
```

### createStore

create initial store

```js
createStore({ name: 'nycticorax' })
```

### getStore

get current store

```js
// get all store value
const store = getStore() // { name: 'nycticorax' }

// get specific key
const { name } = getStore(['name']) // nycticorax

// mutiple
const { name, another } = getStore(['name', 'another'])
```

### dispatch

update store

```js
// update store key name, value is `lorem`
dispatch({ name: 'lorem' })

// multiple key
dispatch({ name: 'lorem', another: 'ipsum' })

// async
function asyncDispatch() {
  return (dispatch, getStore, next) => {
    // get current store
    const { name } = getStore()

    // update name
    dispatch({ name: 'a' })

    setTimeout(() => {
      dispatch({ name: 'b' })

      // resolve
      next(name)
    }, 1000)
  }
}
dispatch(asyncDispatch()).then(() => {
  dispatch({ name: 'c' })
}
```

### getId

get unique key for register listener function

```js
const id = getId()
```

### register

register listener function for watching store change

```js
const id = getId()
register(id, (keys) => {
  console.log(keys)
})
```

### unregister

unregister listener function

```js
unregister(id)
```

### reset

reset store, remove all listener

```js
reset()
```

### connect

use for React store

```js
connect('name', 'another')(ReactComponent)
```

example

```js
import React, { Component } from 'react'
import { connect } from 'nycticorax'

class A extends Component {
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

## License

MIT

## Relevance

Nycticorax
