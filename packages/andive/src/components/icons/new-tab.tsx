import React from 'react'

import NewTab from '../../../img/icons/new-tab.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

export default function NewTabIcon({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <NewTab />
    </SvgIcon>
  )
}
