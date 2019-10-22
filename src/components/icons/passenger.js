import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Passenger from '../../../img/icons/passenger.svg'
import Icon from '../icon'

const PassengerOverride = styled(Passenger)`
  & > path {
    fill: ${props => props.color};
  }
`
const PassengerIcon = props => {
  return (
    <Icon {...props}>
      <PassengerOverride color={props.color} />
    </Icon>
  )
}

PassengerIcon.propTypes = {
  color: PropTypes.string
}
PassengerIcon.size = 24

export default PassengerIcon
export const PassengerSvg = Passenger
