import React from 'react'

import ThumbUp from '../../../img/icons/thumb-up.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ThumbUpIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <ThumbUp />
    </SvgIcon>
  )
}

ThumbUpIcon.size = DEFAULT_SIZE

export default ThumbUpIcon
