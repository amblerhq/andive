import React from 'react'

import Trash from '../../../img/icons/trash.svg'
import SvgIcon from '..//svg-icon'

const TrashIcon = props => {
  return (
    <SvgIcon {...props}>
      <Trash />
    </SvgIcon>
  )
}

TrashIcon.size = 24

export default TrashIcon
export const TrashSvg = Trash
