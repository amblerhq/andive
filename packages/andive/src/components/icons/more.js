import React from 'react'

import More from '../../../img/icons/more.svg'
import Icon from '../icon'
import {palette} from '../..'

const MoreIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <More />
    </Icon>
  )
}

MoreIcon.size = 24

export default MoreIcon
export const MoreSvg = More
