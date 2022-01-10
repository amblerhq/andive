import React, {ReactChild} from 'react'
import styled from 'styled-components'

import Alert, {textColors} from './alert'

const mobileBreakpoint = 768 - 1

const TaskRoot = styled(Alert)`
  flex-direction: row;

  /* On mobile, the layout is a reversed mono-column. */
  @media screen and (max-width: ${mobileBreakpoint}px) {
    flex-direction: column;
  }

  & :not(button) > [data-andive-type='typography'] {
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
  rounded?: boolean
}

/**
 * A informative colored Task block.
 *
 * Variant = warning | info
 *
 * @param {Variant} variant
 */
function Task({className, children, variant = 'warning', rounded = false}: TaskProps) {
  return (
    <TaskRoot className={className} variant={variant} rounded={rounded}>
      {children}
    </TaskRoot>
  )
}

export default Task
