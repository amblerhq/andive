import React from 'react'

import Map from '../../../img/icons/map.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const MapIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Map />
    </SvgIcon>
  )
}

MapIcon.size = 24

export default MapIcon
export const MapSvg = Map
