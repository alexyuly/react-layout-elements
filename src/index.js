import React from 'react'
import ReactDom from 'react-dom'

import Content from './Content';
import Frame from './Frame'

const App = () => (
  <Frame
    layout='rows'
    style={{
      fontFamily: 'sans-serif',
      fontSize: 12,
    }}
  >
    <Frame
      layout='across'
      size={50}
      style={{
        backgroundColor: '#222222',
        color: '#CCCCCC',
        fontSize: '1.5em',
      }}
    >
      <Content>
        My App
      </Content>
    </Frame>
    <Frame
      layout='columns'
    >
      <Frame
        align='start'
        size={300}
        style={{
          backgroundColor: '#444444',
          color: '#CCCCCC',
        }}
      >
        <Content>
          Nav content area
        </Content>
      </Frame>
      <Frame
        align='start'
        style={{
          backgroundColor: '#CCCCCC',
          color: '#222222',
        }}
      >
        <Content>
          Main content area
        </Content>
      </Frame>
    </Frame>
  </Frame>
)

ReactDom.render(<App />, document.body.appendChild(document.createElement('div')))
