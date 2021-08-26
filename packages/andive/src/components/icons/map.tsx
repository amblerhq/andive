import React from 'react'
import Map from '../../../img/icons/map.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const MapIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Map />
    </SvgIcon>
  )
}

MapIcon.size = DEFAULT_SIZE

export default MapIcon
export const MapSvg = Map
