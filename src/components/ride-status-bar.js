import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {baselineCss} from './baseline'

export const RideStatusBar = styled.div`
  ${baselineCss}

  width: 4px;
  height: 48px;

  margin: 8px;

  background-color: ${props => props.color || 'grey'};
`

export function RideStatusBarComponent({color, ...props}) {
  return <RideStatusBar color={color} {...props} />
}

RideStatusBarComponent.propTypes = {
  color: PropTypes.string.isRequired
}

export default RideStatusBarComponent
