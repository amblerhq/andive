import React from 'react'

import Task from '../../../img/icons/task.svg'
import Icon from '../icon'

const TaskIcon = props => {
  return (
    <Icon {...props}>
      <Task />
    </Icon>
  )
}

TaskIcon.size = 24

export default TaskIcon
export const TaskSvg = Task
