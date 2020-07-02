import React from 'react'

import Vsl from '../../../img/icons/vsl-taxi.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const VslIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Vsl />
    </SvgIcon>
  )
}

VslIcon.size = 24

export default VslIcon
export const VslSvg = Vsl
