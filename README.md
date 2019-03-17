# nycticorax

[![Build Status](https://travis-ci.org/fratercula/nycticorax.svg?branch=master)](https://travis-ci.org/fratercula/nycticorax)
[![codecov](https://codecov.io/gh/fratercula/nycticorax/branch/master/graph/badge.svg)](https://codecov.io/gh/fratercula/nycticorax)


State container for JavaScript application, and React

## Install

```bash
$ npm i nycticorax
```

## Usage

for `React`, it is very simple use, **not** `Provider`, `reducer`, `action`, **only** `connect`

[demo](https://fratercula.github.io/nycticorax/) | [counter](https://jsfiddle.net/am0200/gba9sdLp/) | [counter(strict mode)](https://jsfiddle.net/am0200/0L87d29h/)

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
  subscribe,
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
const { name } = getStore('name') // nycticorax

// mutiple
const { name, another } = getStore('name', 'another')
```

### dispatch

update store

```js
// update store key name, value is `lorem`
dispatch({ name: 'lorem' })

// multiple key
dispatch({ name: 'lorem', another: 'ipsum' })

// async
function asyncDispatch(dispatch, getStore) {
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
dispatch(asyncDispatch).then(() => {
  dispatch({ name: 'c' })
}
```

### subscribe

subscribe listeners for watching store change

```js
const unsubscribe = subscribe((keys) => {
  console.log(keys) // change keys
})
unsubscribe() // unsubscribe
```

### connect

use for `React` only

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

## Development

```bash
# install `falco` global
$ npm i @fratercula/falco -g

# start
$ npm start

# build
$ npm run build

# lint
$ npm run test:lint

# test
$ npm run test:unit
```

## License

MIT

## Relevance

Nycticorax
