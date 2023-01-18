import React from 'react'
import Skip from '../../../img/icons/skip.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const SkipIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Skip />
    </SvgIcon>
  )
}

SkipIcon.size = DEFAULT_SIZE

export default SkipIcon
export const SkipSvg = Skip
