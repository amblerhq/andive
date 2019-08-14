import React from 'react'
import PropTypes from 'prop-types'

import {Body2} from '../typography'
import * as palette from '../../constants/palette'

function Item({item, ...props}) {
  return (
    <Body2 color={palette.mediumPrimary} {...props}>
      {item}
    </Body2>
  )
}

Item.propTypes = {
  item: PropTypes.string.isRequired
}

export default Item
