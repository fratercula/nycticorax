/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render } from 'react-dom'
import Com from './react'
import Run from './run'

render((
  <div className="container">
    <div className="co">
      <Com />
    </div>
    <Run />
  </div>
), document.querySelector('#root'))
