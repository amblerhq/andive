import React from 'react'
import Lying from '../../../img/icons/lying.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const LyingIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Lying />
    </SvgIcon>
  )
}

LyingIcon.size = DEFAULT_SIZE

export default LyingIcon
export const LyingSvg = Lying
