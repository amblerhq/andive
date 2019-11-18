import React from 'react'

import Trash from '../../../img/icons/trash.svg'
import Icon from '../icon'

const TrashIcon = props => {
  return (
    <Icon {...props}>
      <Trash />
    </Icon>
  )
}

TrashIcon.size = 24

export default TrashIcon
export const TrashSvg = Trash
