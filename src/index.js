import React from 'react'
import ReactDom from 'react-dom'

import Box from './Box'
import Frame from './Frame'
import Media from './Media'
import Type from './Type'

const Titlebar = () => (
  <Box
    height={50}
    layout='across'
    style='titlebar'
  >
    <Type>
      My App
    </Type>
  </Box>
)

const NavContent = () => (
  <Box
    layout='down'
    style='navContent'
    width={({ widescreen }) => widescreen && 300}
  >
    <Type>
      Hi, I'm the "nav content"! You might add some navigation content to me.
    </Type>
  </Box>
)

const MainContent = () => (
  <Box
    layout='down'
    style='mainContent'
  >
    <Type>
      Hi, I'm the "main content"! You may add whatever you like.
    </Type>
    <Media>
      {({ widescreen }) => widescreen && (
        <Type>
          This text is only visible on screens with a min width of 800!
        </Type>
      )}
    </Media>
  </Box>
)

const App = () => (
  <Frame
    fontSize={12}
    layout='rows'
    media={{
      widescreen: 'screen and (min-width: 800px)',
    }}
    styles={{
      titlebar: {
        backgroundColor: '#222222',
        color: '#FFFFFF',
        fontSize: 1.5, // Font sizes are given in em units by default.
        fontWeight: 'bold',
      },
      navContent: {
        backgroundColor: '#CCCCCC',
        color: '#111111',
      },
      mainContent: {
        backgroundColor: '#FFFFFF',
        color: '#111111',
      },
    }}
  >
    <Titlebar />
    <Box
      layout={({ widescreen }) => (widescreen ? 'columns' : 'down')}
    >
      <NavContent />
      <MainContent />
    </Box>
  </Frame>
)

ReactDom.render(<App />, document.body.appendChild(document.createElement('div')))
