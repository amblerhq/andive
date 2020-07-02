import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Ambulance from '../../../img/icons/ambulance.svg'
import SvgIcon from '../svg-icon'

const AmbulanceOverride = styled(Ambulance)`
  & > g > path {
    fill: ${props => props.color};
  }

  & > g > path:nth-of-type(2) {
    stroke: none !important;
  }
`

const AmbulanceIcon = props => {
  return (
    <SvgIcon {...props}>
      <AmbulanceOverride color={props.color} />
    </SvgIcon>
  )
}

AmbulanceIcon.propTypes = {
  color: PropTypes.string
}
AmbulanceOverride.size = 22

export default AmbulanceIcon
export const AmbulanceSvg = Ambulance
