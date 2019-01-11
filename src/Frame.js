import React from 'react'

const Frame = ({
  children,
}) => (
  <div>
    {children}
  </div>
)

export default Frame

// A Frame element stretches to fit all of the available space allocated by the render target (for example, a web browser window).
// Frames can be layered to create an "overlay" effect.
