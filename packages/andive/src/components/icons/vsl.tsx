import React from 'react'
import Vsl from '../../../img/icons/vsl-taxi.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const VslIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Vsl />
    </SvgIcon>
  )
}

VslIcon.size = DEFAULT_SIZE

export default VslIcon
export const VslSvg = Vsl
