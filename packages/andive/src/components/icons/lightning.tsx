import React from 'react'

import Lightning from '../../../img/icons/lightning.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

export default function LightningIcon({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Lightning />
    </SvgIcon>
  )
}
