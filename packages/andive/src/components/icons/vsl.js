import React from 'react'

import Vsl from '../../../img/icons/vsl-taxi.svg'
import SvgIcon from '../svg-icon'

const VslIcon = props => {
  return (
    <SvgIcon {...props}>
      <Vsl />
    </SvgIcon>
  )
}

VslIcon.size = 24

export default VslIcon
export const VslSvg = Vsl
