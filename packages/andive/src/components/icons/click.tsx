import React from 'react'

import Click from '../../../img/icons/click.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

export default function ClickIcon({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Click />
    </SvgIcon>
  )
}
