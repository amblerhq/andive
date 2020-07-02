import React from 'react'

import Task from '../../../img/icons/task.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const TaskIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Task />
    </SvgIcon>
  )
}

TaskIcon.size = 24

export default TaskIcon
export const TaskSvg = Task
