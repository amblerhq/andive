import React from 'react'

import ThumbDown from '../../../img/icons/thumb-down.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ThumbDownIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <ThumbDown />
    </SvgIcon>
  )
}

ThumbDownIcon.size = DEFAULT_SIZE

export default ThumbDownIcon
