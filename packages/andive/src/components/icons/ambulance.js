import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Ambulance from '../../../img/icons/ambulance.svg'
import Icon from '../icon'

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
    <Icon {...props}>
      <AmbulanceOverride color={props.color} />
    </Icon>
  )
}

AmbulanceIcon.propTypes = {
  color: PropTypes.string
}
AmbulanceOverride.size = 22

export default AmbulanceIcon
export const AmbulanceSvg = Ambulance
