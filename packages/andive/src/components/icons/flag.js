import React from 'react'

import Flag from '../../../img/icons/flag.svg'
import Icon from '../icon'

const FlagIcon = props => {
  return (
    <Icon {...props}>
      <Flag />
    </Icon>
  )
}

FlagIcon.size = 24

export default FlagIcon
export const FlagSvg = Flag
