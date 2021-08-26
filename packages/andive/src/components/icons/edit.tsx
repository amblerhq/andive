import React from 'react'

import Edit from '../../../img/icons/edit.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const EditIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Edit />
    </SvgIcon>
  )
}

EditIcon.size = DEFAULT_SIZE

export default EditIcon
export const EditSvg = Edit
