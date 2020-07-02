import React from 'react'

import Edit from '../../../img/icons/edit.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const EditIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Edit />
    </SvgIcon>
  )
}

EditIcon.size = 24

export default EditIcon
export const EditSvg = Edit
