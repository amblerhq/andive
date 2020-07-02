import React from 'react'

import Flag from '../../../img/icons/flag.svg'
import SvgIcon from '..//svg-icon'

const FlagIcon = props => {
  return (
    <SvgIcon {...props}>
      <Flag />
    </SvgIcon>
  )
}

FlagIcon.size = 24

export default FlagIcon
export const FlagSvg = Flag
