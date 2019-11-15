import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const RideStatusBar = styled.div`
  width: 8px;
  height: 48px;
  border-radius: 2px;

  margin: 8px;

  background-color: ${props => props.color || 'grey'};
`

export function RideStatusBarComponent({color, ...props}) {
  return <RideStatusBar color={color} {...props} />
}

RideStatusBarComponent.propTypes = {
  color: PropTypes.string
}

export default RideStatusBarComponent
