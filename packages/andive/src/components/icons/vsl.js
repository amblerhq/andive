import React from 'react'

import Vsl from '../../../img/icons/vsl-taxi.svg'
import Icon from '../icon'
import {palette} from '../..'

const VslIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Vsl />
    </Icon>
  )
}

VslIcon.size = 24

export default VslIcon
export const VslSvg = Vsl
