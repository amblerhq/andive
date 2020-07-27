import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Body2 } from './typography'

const StatusWrapper = styled(({ color, backgroundColor, ...props }) => (
  <div {...props} />
))`
  display: inline-flex;
  align-items: center;
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
  status,
  color,
  backgroundColor,
  ...props
}) {
  return (
    <StatusWrapper backgroundColor={backgroundColor} {...props}>
      {status && <Status color={color}>{status}</Status>}
    </StatusWrapper>
  )
}

TripStatusComponent.propTypes = {
  status: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
}
