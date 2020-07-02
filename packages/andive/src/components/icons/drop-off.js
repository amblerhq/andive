import React from 'react'

import DropOff from '../../../img/icons/drop-off.svg'
import SvgIcon from '../svg-icon'

const DropOffIcon = props => {
  return (
    <SvgIcon {...props}>
      <DropOff />
    </SvgIcon>
  )
}

DropOffIcon.size = 24

export default DropOffIcon
export const DropOffSvg = DropOff
