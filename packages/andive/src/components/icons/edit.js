import React from 'react'

import Edit from '../../../img/icons/edit.svg'
import Icon from '../icon'
import {palette} from '../..'

const EditIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Edit />
    </Icon>
  )
}

EditIcon.size = 24

export default EditIcon
export const EditSvg = Edit
