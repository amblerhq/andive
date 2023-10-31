import React, {ReactChild} from 'react'
import styled from 'styled-components'

import Box from './box'
import * as palette from '../constants/palette'

const textColors = {
  success: palette.successText,
  error: palette.errorText,
  warning: palette.warningText,
  info: palette.white,
  disabled: palette.darkPrimary
}

const backgroundColors = {
  success: palette.lightLettuceGreen,
  error: palette.lightRadishRed,
  warning: palette.lightPotatoYellow,
  info: palette.mediumBeetrootPurple,
  disabled: palette.border
}

const AlertRoot = styled(Box)<{variant: string; rounded: boolean}>`
  padding: 8px 16px;
  background-color: ${props => backgroundColors[props.variant]};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  border-top-left-radius: ${props => (props.rounded ? 16 : 4)}px;
  border-top-right-radius: ${props => (props.rounded ? 16 : 4)}px;
  border-bottom-right-radius: ${props => (props.rounded ? 0 : 4)}px;
  border-bottom-left-radius: ${props => (props.rounded ? 0 : 4)}px;

  & [data-andive-type='typography'] {
    color: ${props => textColors[props.variant]};
  }
  & svg [stroke='currentcolor'],
  & svg [fill='currentcolor'] {
    color: ${props => textColors[props.variant]};
  }
`

type AlertVariant = 'success' | 'error' | 'warning' | 'info' | 'disabled'
interface AlertProps {
  className?: string
  children: ReactChild
  variant: AlertVariant
  rounded?: boolean
}

/**
 * A informative colored Alert block.
 *
 * Variant = success | error | warning | info | disabled
 *
 * @param {Variant} variant
 */
function Alert({className, children, variant = 'warning', rounded = false}: AlertProps) {
  return (
    <AlertRoot className={className} variant={variant} rounded={rounded}>
      {children}
    </AlertRoot>
  )
}

export default Alert
