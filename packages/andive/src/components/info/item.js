import React from 'react'
import PropTypes from 'prop-types'

import {Body2} from '../typography'
import * as palette from '../../constants/palette'

function Item({item, ...props}) {
  return (
    <Body2 color={palette.secondaryText} {...props}>
      {item}
    </Body2>
  )
}

Item.propTypes = {
  item: PropTypes.string
}

export default Item
