import React from 'react'

import Map from '../../../img/icons/map.svg'
import Icon from '../icon'
import {palette} from '../..'

const MapIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Map />
    </Icon>
  )
}

MapIcon.size = 24

export default MapIcon
export const MapSvg = Map
