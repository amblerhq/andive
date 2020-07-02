import React from 'react'

import Trash from '../../../img/icons/trash.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const TrashIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Trash />
    </SvgIcon>
  )
}

TrashIcon.size = 24

export default TrashIcon
export const TrashSvg = Trash
