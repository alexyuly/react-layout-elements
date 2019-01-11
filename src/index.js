import React from 'react'
import ReactDom from 'react-dom'

import Box from './Box'
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

const Sidebar = () => (
  <Box
    layout='down'
    style='sidebar'
    width={({ widescreen }) => widescreen && 300}
  >
    <Type>
      Hi, I'm the "sidebar"! You might add some navigation content to me.
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

const Example = () => (
  <Box
    layout='rows'
    withMedia={{
      widescreen: {
        minWidth: 800,
        screen: true,
      },
    }}
    withStyles={{
      titlebar: {
        backgroundColor: '#222222',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
      },
      sidebar: {
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
      <Sidebar />
      <MainContent />
    </Box>
  </Box>
)

ReactDom.render(<Example />, document.body.appendChild(document.createElement('div')))
