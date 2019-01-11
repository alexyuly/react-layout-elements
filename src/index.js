import React from 'react'
import ReactDom from 'react-dom'

const Example = () => (
  <div>
    Hello, world!
  </div>
)

ReactDom.render(<Example />, document.body.appendChild(document.createElement('div')))
