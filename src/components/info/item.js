import React from 'react'
import PropTypes from 'prop-types'

import {Body3} from '../typography'

function Item({item, ...props}) {
  return <Body3 {...props}>{item}</Body3>
}

Item.propTypes = {
  item: PropTypes.string.isRequired
}

export default Item
