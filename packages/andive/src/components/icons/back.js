import React from 'react'

import Back from '../../../img/icons/back.svg'
import SvgIcon from '../svg-icon'

const BackIcon = props => {
  return (
    <SvgIcon {...props}>
      <Back />
    </SvgIcon>
  )
}

BackIcon.size = 24

export default BackIcon
export const BackSvg = Back
