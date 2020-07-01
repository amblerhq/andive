import React from 'react'

import Map from '../../../img/icons/map.svg'
import Icon from '../icon'

const MapIcon = props => {
  return (
    <Icon {...props}>
      <Map />
    </Icon>
  )
}

MapIcon.size = 24

export default MapIcon
export const MapSvg = Map
