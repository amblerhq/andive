import React from 'react'

import Edit from '../../../img/icons/edit.svg'
import Icon from '../icon'

const EditIcon = props => {
  return (
    <Icon {...props}>
      <Edit />
    </Icon>
  )
}

EditIcon.size = 24

export default EditIcon
export const EditSvg = Edit
