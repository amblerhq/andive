import React from 'react'

import Mf from '../../../img/icons/mf.svg'
import Icon from '../icon'

const MfIcon = props => {
  return (
    <Icon {...props}>
      <Mf />
    </Icon>
  )
}

MfIcon.size = 40

export default MfIcon
export const MfSvg = Mf
