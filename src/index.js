import React from 'react'
import ReactDom from 'react-dom'

import Content from './Content';
import Frame from './Frame'

document.body.style.margin = 0
document.documentElement.style.fontSize = '18px'

const App = () => (
  <Frame
    layout='rows'
    media={{
      widescreen: 'screen and (min-width: 800px)',
    }}
    style={{
      fontFamily: 'sans-serif',
    }}
  >
    <Frame
      layout='across'
      size={63}
      style={{
        backgroundColor: '#222222',
        color: '#CCCCCC',
        fontSize: '1.5rem',
        lineHeight: 1,
      }}
    >
      <Content>
        My App
      </Content>
    </Frame>
    <Frame
      layout={media => (media.widescreen ? 'columns' : 'down')}
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
        <Content>
          Add some navigation content here.
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
