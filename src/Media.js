// TODO:
const mediaQueryResults = {}

const Media = ({
  children,
}) => children(mediaQueryResults)

export default Media

// A Media element passes the result of named media queries to its children function.
