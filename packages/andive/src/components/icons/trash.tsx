import React from 'react'
import Trash from '../../../img/icons/trash.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const TrashIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Trash />
    </SvgIcon>
  )
}

TrashIcon.size = DEFAULT_SIZE

export default TrashIcon
export const TrashSvg = Trash
