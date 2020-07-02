import React from 'react'

import Check from '../../../img/icons/check.svg'
import SvgIcon from '..//svg-icon'

const CheckIcon = props => {
  return (
    <SvgIcon {...props}>
      <Check />
    </SvgIcon>
  )
}

CheckIcon.size = 24

export default CheckIcon
export const CheckSvg = Check
