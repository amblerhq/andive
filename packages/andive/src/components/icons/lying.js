import React from 'react'

import Lying from '../../../img/icons/lying.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const LyingIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Lying />
    </SvgIcon>
  )
}

LyingIcon.size = 24

export default LyingIcon
export const LyingSvg = Lying
