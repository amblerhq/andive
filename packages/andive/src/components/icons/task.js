import React from 'react'

import Task from '../../../img/icons/task.svg'
import SvgIcon from '../svg-icon'

const TaskIcon = props => {
  return (
    <SvgIcon {...props}>
      <Task />
    </SvgIcon>
  )
}

TaskIcon.size = 24

export default TaskIcon
export const TaskSvg = Task
