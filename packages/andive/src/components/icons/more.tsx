import React from 'react'
import More from '../../../img/icons/more.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const MoreIcon = ({color = palette.mediumPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <More />
    </SvgIcon>
  )
}

MoreIcon.size = DEFAULT_SIZE

export default MoreIcon
export const MoreSvg = More
