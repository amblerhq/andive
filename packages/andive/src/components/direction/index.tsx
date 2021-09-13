import React from 'react'
import styled from 'styled-components'

import * as Typography from '../typography'
import Box from '../box'

import {Origin} from './origin'
import {Destination} from './destination'

export enum DirectionVariant {
  Text = 'Text',
  Centered = 'Centered'
}

const DirectionRoot = styled(({fullWidth, nopadding, ...props}) => <div {...props} />)`
  min-width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: ${props => (props.nopadding ? 0 : '8px')};
`

interface DirectionProps {
  label?: React.ReactNode
  fullWidth?: number
  nopadding?: boolean
  children?: any /* FixType */
  variant?: DirectionVariant
}
export function Direction({
  children,
  label,
  fullWidth,
  nopadding,
  variant = DirectionVariant.Text,
  ...props
}: DirectionProps) {
  return (
    <DirectionRoot fullWidth={fullWidth} nopadding={nopadding} {...props}>
      {label && <Box>{typeof label === 'string' ? <Typography.Body1>{label}</Typography.Body1> : label}</Box>}
      {React.Children.map(children, child => {
        const childProps: {label?: string; variant: DirectionVariant} = {variant}
        if (label) {
          childProps.label = ' '
        }
        return React.cloneElement(child, childProps)
      })}
    </DirectionRoot>
  )
}

Direction.Origin = Origin
Direction.Destination = Destination
