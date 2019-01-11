import React from 'react'
import ReactDom from 'react-dom'

import Box from './Box'
import Type from './Type'

const example = (
  <Box
    layout='rows'
    withMedia={{
      widescreen: {
        screen: true,
        minWidth: 800,
      },
    }}
  >
    <Box
      height={50}
      layout='across'
    >
      <Type>
        My App
      </Type>
    </Box>
    <Box
      media={({ widescreen }) => ({
        layout: widescreen ? 'columns' : 'down',
      })}
    >
      <Box
        layout='down'
        media={({ widescreen }) => ({
          width: widescreen && 300,
        })}
      >
        <Type>
          Hi, I'm the "sidebar"! You might add some navigation content to me.
        </Type>
      </Box>
      <Box
        layout='down'
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
    </Box>
  </Box>
)

ReactDom.render(example, document.body.appendChild(document.createElement('div')))
