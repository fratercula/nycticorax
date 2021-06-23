/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render } from 'react-dom'
import Com from './react'
import Run from './run'
import classes from './index.less'

render((
  <div className={classes.container}>
    <div className={classes.co}>
      <Com />
    </div>
    <div className={classes.ru}>
      <Run />
    </div>
  </div>
), document.querySelector('#root'))
