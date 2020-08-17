import React from 'react'
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

const StatusRoot = styled(({ color, ...props }) => <Body2 {...props} />)`
  ${({ color }) => color && `color: ${color};`}
`

interface StatusProps {
  primary: string,
  secondary?: string,
  color: string,
  backgroundColor: string
}
export function Status({
  color,
  backgroundColor,
  primary,
  secondary,
  ...props
}: StatusProps) {
  return (
    <StatusWrapper backgroundColor={backgroundColor} {...props}>
      {primary && <StatusRoot color={color}>{primary}</StatusRoot>}
      {secondary && <StatusRoot color={color}>{secondary}</StatusRoot>}
    </StatusWrapper>
  )
}