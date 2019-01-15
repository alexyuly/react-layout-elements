import React from 'react'

import Frame from './Frame'
import ContentMarginContext from './ContentMarginContext'
import MatchMediaContext from './MatchMediaContext'

class Screen extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {}
    document.body.style.margin = 0
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize = () => {
      if (this.props.media) {
        this.setState({
          matchMedia: this.getMatchMedia(),
        })
      }
    })
    this.handleResize()
  }
  componentDidUpdate(prevProps) {
    if (this.props.sizeUnit && this.props.sizeUnit !== prevProps.sizeUnit) {
      // Set the font size of the root element -- used for rem units
      document.documentElement.style.fontSize = this.props.sizeUnit
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  getMatchMedia() {
    return Object.keys(this.props.media).reduce(
      (result, mediaKey) => ({
        ...result,
        [mediaKey]: window.matchMedia(this.props.media[mediaKey]).matches,
      }),
      {}
    )
  }
  render() {
    return (
      <ContentMarginContext.Provider value={this.props.contentMargin || '1rem'}>
        <MatchMediaContext.Provider value={this.state.matchMedia || this.getMatchMedia()}>
          <Frame
            align={this.props.align}
            contentMargin={this.props.contentMargin}
            layout={this.props.layout}
            style={this.props.style}
          >
            {this.props.children}
          </Frame>
        </MatchMediaContext.Provider>
      </ContentMarginContext.Provider>
    )
  }
}

export default Screen
