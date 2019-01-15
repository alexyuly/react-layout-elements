import React from 'react'

import ContentMarginContext from './ContentMarginContext'
import MatchMediaContext from './MatchMediaContext'

class Frame extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {}
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize = () => {
      if (this.props.media) {
        this.setState({
          matchMedia: Object.keys(this.props.media).reduce(
            (result, mediaKey) => ({
              ...result,
              [mediaKey]: window.matchMedia(this.props.media[mediaKey]).matches,
            }),
            {}
          ),
        })
      }
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  render() {
    return (
      <MatchMediaContext.Consumer>
        {matchMedia => {
          const props = Object.keys(this.props).reduce(
            (result, propName) => ({
              ...result,
              [propName]: typeof this.props[propName] === 'function'
                ? this.props[propName](matchMedia)
                : this.props[propName],
            }),
            {}
          )
          props.align = props.align || 'center'
          props.contentMargin = props.contentMargin || '1rem'
          props.layout = props.layout || 'down'
          let flexDirection
          if (props.layout === 'across' || props.layout === 'columns') {
            flexDirection = 'row'
          } else if (props.layout === 'down' || props.layout === 'rows') {
            flexDirection = 'column'
          } else {
            throw new Error(`Frame got unknown value for layout: "${props.layout}"`)
          }
          return (
            <MatchMediaContext.Provider
              value={{
                ...matchMedia,
                ...this.state.matchMedia,
              }}
            >
              <ContentMarginContext.Provider value={props.contentMargin}>
                <div
                  style={{
                    alignItems: props.align,
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
                    ...props.style,
                  }}
                >
                  {props.layout === 'across' || props.layout === 'down'
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
                        {props.children}
                      </div>
                    )
                    : React.Children.map(
                      props.children,
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
              </ContentMarginContext.Provider>
            </MatchMediaContext.Provider>
          )
        }}
      </MatchMediaContext.Consumer>
    )
  }
}

export default Frame
