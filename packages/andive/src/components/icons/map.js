import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Map from '../../../img/icons/map.svg'
import SvgIcon from '..//svg-icon'

const MapOverride = styled(Map)`
  & circle {
    fill: ${props => props.color};
  }
`

const MapIcon = props => {
  return (
    <SvgIcon {...props}>
      <MapOverride color={props.color} />
    </SvgIcon>
  )
}

MapIcon.propTypes = {
  color: PropTypes.string
}
MapOverride.size = 24

export default MapIcon
export const MapSvg = Map
