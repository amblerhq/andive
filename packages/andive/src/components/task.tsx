import React, {ReactChild} from 'react'
import styled from 'styled-components'
import * as palette from '../constants/palette'
import Box from './box'

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
  info: palette.lightBeetrootPurple,
  disabled: palette.border
}

const mobileBreakpoint = 768 - 1

const TaskRoot = styled(Box)<{variant: string}>`
  padding: 8px 16px;
  background-color: ${props => backgroundColors[props.variant]};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 4px;

  /* On mobile, the layout is column. */
  @media screen and (max-width: ${mobileBreakpoint}px) {
    flex-flow: column nowrap;
  }

  & :not(button) > [data-andive-type='typography'],
  & > [data-andive-type='typography'] {
    color: ${props => textColors[props.variant]};
    width: 100%;
  }
  & [data-andive-type='button'] {
    color: ${props => textColors[props.variant]};
    min-width: inherit;
  }
`

type TaskVariant = 'warning' | 'info'
interface TaskProps {
  className?: string
  children: ReactChild
  variant: TaskVariant
}

/**
 * A informative colored Task block.
 *
 * Variant = warning | info
 *
 * @param {Variant} variant
 */
function Task({className, children, variant = 'warning'}: TaskProps) {
  return (
    <TaskRoot className={className} variant={variant}>
      {children}
    </TaskRoot>
  )
}

export default Task
