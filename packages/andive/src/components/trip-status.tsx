import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Body2 } from './typography'

const StatusWrapper = styled(({ color, backgroundColor, ...props }) => (
  <div {...props} />
))`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  min-height: 40px;
  padding: 8px 16px;
  border-radius: 4px;

  ${({ color }) => color && `color: ${color};`}
  ${({ backgroundColor }) => backgroundColor && `background: ${backgroundColor};`}
`

const Status = styled(({ color, ...props }) => <Body2 {...props} />)`
  ${({ color }) => color && `color: ${color};`}
`

export default function TripStatusComponent({
  color,
  backgroundColor,
  primary,
  secondary,
  ...props
}) {
  return (
    <StatusWrapper backgroundColor={backgroundColor} {...props}>
      {primary && <Status color={color}>{primary}</Status>}
      {secondary && <Status color={color}>{secondary}</Status>}
    </StatusWrapper>
  )
}

TripStatusComponent.propTypes = {
  status: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  primary: PropTypes.string,
  secondary: PropTypes.string,
}
