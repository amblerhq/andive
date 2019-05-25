import React from 'react'
import PropTypes from 'prop-types'

import {Body2} from '../typography'
import {mediumGrey} from '../../constants/palette'

function Item({item, ...props}) {
  return (
    <Body2 color={mediumGrey} {...props}>
      {item}
    </Body2>
  )
}

Item.propTypes = {
  item: PropTypes.string.isRequired
}

export default Item
