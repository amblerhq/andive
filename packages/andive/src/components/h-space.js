import React from 'react'
import PropTypes from 'prop-types'

function HSpace({px}) {
  return <div style={{width: px}} />
}

HSpace.propTypes = {
  px: PropTypes.number
}

export default HSpace
