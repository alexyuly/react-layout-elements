import React from 'react'

import ContentMarginContext from './ContentMarginContext'

const Content = ({
  children,
}) => (
  <ContentMarginContext.Consumer>
    {contentMargin => 
      <div
        style={{
          clear: 'none',
          float: 'none',
          margin: contentMargin,
        }}
      >
        {children}
      </div>
    }
  </ContentMarginContext.Consumer>
)

export default Content
