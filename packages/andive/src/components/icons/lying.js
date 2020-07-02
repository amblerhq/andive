import React from 'react'

import Lying from '../../../img/icons/lying.svg'
import SvgIcon from '../svg-icon'

const LyingIcon = props => {
  return (
    <SvgIcon {...props}>
      <Lying />
    </SvgIcon>
  )
}

LyingIcon.size = 24

export default LyingIcon
export const LyingSvg = Lying
