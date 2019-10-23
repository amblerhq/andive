import React from 'react'
import PropTypes from 'prop-types'

function VSpace({px}) {
  return <div style={{height: px}} />
}

VSpace.propTypes = {
  px: PropTypes.number.isRequired
}

export default VSpace
