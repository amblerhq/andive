import React from 'react'
import PropTypes from 'prop-types'

import {Body1} from '../typography'

function Label({label, ...props}) {
  return <Body1 {...props}>{label}</Body1>
}

Label.propTypes = {
  label: PropTypes.string.isRequired
}

export default Label
