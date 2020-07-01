import React from 'react'

import Task from '../../../img/icons/task.svg'
import Icon from '../icon'
import {palette} from '../..'

const TaskIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Task />
    </Icon>
  )
}

TaskIcon.size = 24

export default TaskIcon
export const TaskSvg = Task
