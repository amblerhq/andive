import React from 'react'

import Lying from '../../../img/icons/lying.svg'
import Icon from '../icon'
import {palette} from '../..'

const LyingIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Lying />
    </Icon>
  )
}

LyingIcon.size = 24

export default LyingIcon
export const LyingSvg = Lying
