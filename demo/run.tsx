/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useRef } from 'react'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { githubGist, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {
  createStore,
  getStore,
  dispatch,
  subscribe,
} from './store/index'
import consoleHook from './console'
import classes from './index.less'

const expression = `
// import Nycticorax from 'nycticorax'

// type Store = {
//   config: {
//     type: string,
//     on: boolean,
//   },
//   time: number,
// }

// const nycticorax = new Nycticorax<Store>()

// const {
//   createStore,
//   getStore,
//   dispatch,
//   subscribe,
// } = nycticorax

createStore({
  config: {
    type: 'page',
    on: false,
  },
  time: 11,
})

const unsubscribe = subscribe((keys) => {
  console.log('subscribe', keys)
})

console.log('store0', getStore())

dispatch({ time: 1 })
dispatch({ config: { on: true, type: 'component' } })

console.log('store1', getStore())
setTimeout(() => console.log('store2', getStore()))

dispatch({ time: 2 }, true)

console.log('store3', getStore())

const dispatcher0 = ({ getStore, dispatch }, ...args) => {
  console.log('args0', args)
  const { time } = getStore()
  dispatch({ time: time + 1 })
}

dispatch(dispatcher0, 1, 2)

const dispatcher1 = async ({ getStore, dispatch }, ...args) => {
  console.log('args1', args)
  await new Promise((r) => setTimeout(r, 1000))
  const { config } = getStore()
  if (typeof args[0] === 'boolean') {
    [config.on] = args
  }
  dispatch({ config })
}

dispatch(dispatcher1, false).then(() => {
  dispatch({ time: 1000 })
})

unsubscribe()
`

export default () => {
  const [log, setLog] = useState('')
  const texts = useRef<string[]>([])

  useEffect(() => {
    const consoleUnHook = consoleHook((...args) => {
      const text = args.map((t) => {
        if (typeof t === 'string') {
          return t
        }
        return JSON.stringify(t)
      }).join(' ')
      texts.current.push(text)
    })

    setTimeout(() => {
      consoleUnHook()
      setLog(texts.current.join('\n\n'))
    }, 1000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line no-new-func
      new Function('getStore', 'dispatch', 'subscribe', 'createStore', expression)
        .call(this, getStore, dispatch, subscribe, createStore)
    }, 500)
  }, [])

  return (
    <>
      <SyntaxHighlighter language="javascript" style={githubGist}>
        {expression}
      </SyntaxHighlighter>
      <div className={classes.right}>
        <h2>Console</h2>
        <SyntaxHighlighter language="scheme" style={a11yLight}>
          {log}
        </SyntaxHighlighter>
      </div>
    </>
  )
}
