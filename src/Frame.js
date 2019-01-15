import React from 'react'

import MatchMediaContext from './MatchMediaContext'

const Frame = (originalProps) => {
  return (
    <MatchMediaContext.Consumer>
      {(media) => {
        const {
          align = 'center',
          children,
          layout = 'down',
          style,
        } = Object.keys(originalProps).reduce(
          (result, propName) => ({
            ...result,
            [propName]: typeof originalProps[propName] === 'function'
              ? originalProps[propName](media)
              : originalProps[propName],
          }),
          {}
        )
        let flexDirection
        if (layout === 'across' || layout === 'columns') {
          flexDirection = 'row'
        } else if (layout === 'down' || layout === 'rows') {
          flexDirection = 'column'
        } else {
          throw new Error(`Frame got unknown value for layout: "${layout}"`)
        }
        return (
          <div
            style={{
              alignItems: align,
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection,
              height: '100%',
              justifyContent: 'start',
              margin: 0,
              overflowX: 'across' ? 'auto' : 'none',
              overflowY: 'down' ? 'auto' : 'none',
              padding: 0,
              position: 'absolute',
              width: '100%',
              ...style,
            }}
          >
            {layout === 'across' || layout === 'down'
              ? (
                <div
                  style={{
                    alignSelf: 'stretch',
                    flexBasis: 'auto',
                    flexGrow: 1,
                    flexShrink: 0,
                    margin: 0,
                    padding: 0,
                    position: 'relative',
                  }}
                >
                  {children}
                </div>
              )
              : React.Children.map(
                children,
                (child) => {
                  return (
                    <div
                      style={{
                        alignSelf: 'stretch',
                        flexBasis: child.props.size || 'auto',
                        flexGrow: child.props.size ? 0 : 1,
                        flexShrink: 0,
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                      }}
                    >
                      {child}
                    </div>
                  )
                }
              )
            }
          </div>
        )
      }}
    </MatchMediaContext.Consumer>
  )
}

export default Frame
