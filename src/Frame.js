import React from 'react'

class Frame extends React.Component {
  constructor(...args) {
    super(...args)
    document.body.style.margin = 0
  }
  render() {
    const {
      align = 'center',
      children,
      layout = 'down',
      style,
    } = this.props
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
          ? children
          : React.Children.map(
            children,
            (child) => {
              return (
                <div
                  style={{
                    alignSelf: 'stretch',
                    display: 'flex',
                    flexBasis: child.props.size || 'auto',
                    flexGrow: child.props.size ? 0 : 1,
                    flexShrink: 0,
                    justifyContent: 'start',
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
  }
}

export default Frame
