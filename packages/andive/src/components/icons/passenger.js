import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Passenger from '../../../img/icons/passenger.svg'
import SvgIcon from '../svg-icon'

const PassengerOverride = styled(Passenger)`
  & > path {
    fill: ${props => props.color};
  }
`
const PassengerIcon = props => {
  return (
    <SvgIcon {...props}>
      <PassengerOverride color={props.color} />
    </SvgIcon>
  )
}

PassengerIcon.propTypes = {
  color: PropTypes.string
}
PassengerIcon.size = 24

export default PassengerIcon
export const PassengerSvg = Passenger
