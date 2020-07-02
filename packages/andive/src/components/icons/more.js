import React from 'react'

import More from '../../../img/icons/more.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const MoreIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <More />
    </SvgIcon>
  )
}

MoreIcon.size = 24

export default MoreIcon
export const MoreSvg = More
