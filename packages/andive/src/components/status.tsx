import React from 'react'
import styled from 'styled-components'

import { Body3 } from './typography'

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

const SecondaryStatus = styled(({secondayItalic, ...props}) => (<Body3 {...props} />))`
  font-style: ${props => (props.secondaryItalic ? 'italic' : 'none')};
`

interface StatusProps {
  primary: React.ReactNode,
  className?: string,
  color?: string,
  backgroundColor?: string
  secondary?: React.ReactNode,
  secondaryItalic?: boolean
}
export function Status({
  className,
  color,
  backgroundColor,
  primary,
  secondary,
  secondaryItalic = false
}: StatusProps) {
  return (
    <StatusWrapper className={className} color={color} backgroundColor={backgroundColor}>
      {primary && <Body3 color={color}>{primary}</Body3>}
      {secondary && <SecondaryStatus color={color} secondaryItalic={secondaryItalic}>{secondary}</SecondaryStatus>}
    </StatusWrapper>
  )
}
