import React from 'react'

import Vsl from '../../../img/icons/vsl-taxi.svg'
import Icon from '../icon'

const VslIcon = props => {
  return (
    <Icon {...props}>
      <Vsl />
    </Icon>
  )
}

VslIcon.size = 24

export default VslIcon
export const VslSvg = Vsl
