import React from 'react'
import Task from '../../../img/icons/task.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const TaskIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Task />
    </SvgIcon>
  )
}

TaskIcon.size = DEFAULT_SIZE

export default TaskIcon
export const TaskSvg = Task
