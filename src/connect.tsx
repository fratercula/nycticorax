import React, { ElementType } from 'react'

export default () => () => (C: ElementType) => {
  class ST extends React.Component<any, any> {
    render() {
      return (
        <C a={1} />
      )
    }
  }

  return ST as ElementType
}
