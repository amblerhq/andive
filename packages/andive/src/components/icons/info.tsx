import React from 'react'

import Info from '../../../img/icons/info.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const InfoIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Info />
    </SvgIcon>
  )
}

InfoIcon.size = DEFAULT_SIZE

export default InfoIcon
export const InfoSvg = Info
