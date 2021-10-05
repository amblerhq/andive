import React from 'react'
import styled from 'styled-components'

import * as Typography from '../typography'
import Box from '../box'

import {Origin} from './origin'
import {Destination} from './destination'

export type DirectionVariant = 'text' | 'centered'

const DirectionRoot = styled(({fullWidth, nopadding, ...props}) => <div {...props} />)`
  min-width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: ${props => (props.nopadding ? 0 : '8px')};
`

const DirectionLabelBox = styled(Box)`
  padding-top: 0;
`

interface DirectionProps {
  label?: React.ReactNode
  fullWidth?: number
  nopadding?: boolean
  children?: any /* FixType */
  variant?: DirectionVariant
}
export function Direction({children, label, fullWidth, nopadding, variant = 'text', ...props}: DirectionProps) {
  return (
    <DirectionRoot fullWidth={fullWidth} nopadding={nopadding} {...props}>
      {label && (
        <DirectionLabelBox>
          {typeof label === 'string' ? <Typography.Body1>{label}</Typography.Body1> : label}
        </DirectionLabelBox>
      )}
      {React.Children.map(children, child => {
        const childProps: {label?: string; variant?: DirectionVariant} = {variant}
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
