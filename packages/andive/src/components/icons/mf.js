import React from 'react'

import Mf from '../../../img/icons/mf.svg'
import Icon from '../icon'
import {palette} from '../..'

const MfIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Mf />
    </Icon>
  )
}

MfIcon.size = 40

export default MfIcon
export const MfSvg = Mf
