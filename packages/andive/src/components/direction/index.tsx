import React from 'react'
import styled from 'styled-components'

import * as Typography from '../typography'
import Box from '../box'

import {Origin} from './origin'
import {Destination} from './destination'

const DirectionRoot = styled(({fullWidth, nopadding, ...props}) => <div {...props} />)`
  min-width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: ${props => (props.nopadding ? 0 : '8px')};
`

interface DirectionProps {
  label?: string
  fullWidth?: number
  nopadding?: boolean
  children?: any /* FixType */
}
export function Direction({children, label, fullWidth, nopadding, ...props}: DirectionProps) {
  return (
    <DirectionRoot fullWidth={fullWidth} nopadding={nopadding} {...props}>
      {label && (
        <Box>
          <Typography.Body1>{label}</Typography.Body1>
        </Box>
      )}
      {React.Children.map(children, child => {
        const childProps: {label?: string} = {}
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
