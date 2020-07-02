import React from 'react'

import Trash from '../../../img/icons/trash.svg'
import Icon from '../icon'
import {palette} from '../..'

const TrashIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Trash />
    </Icon>
  )
}

TrashIcon.size = 24

export default TrashIcon
export const TrashSvg = Trash
