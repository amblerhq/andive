import React from 'react'

import Edit from '../../../img/icons/edit.svg'
import SvgIcon from '..//svg-icon'

const EditIcon = props => {
  return (
    <SvgIcon {...props}>
      <Edit />
    </SvgIcon>
  )
}

EditIcon.size = 24

export default EditIcon
export const EditSvg = Edit
