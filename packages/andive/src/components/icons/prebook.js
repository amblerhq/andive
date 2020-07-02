import React from 'react'

import Prebook from '../../../img/icons/prebook.svg'
import SvgIcon from '../svg-icon'

const PrebookIcon = props => {
  return (
    <SvgIcon {...props}>
      <Prebook />
    </SvgIcon>
  )
}

PrebookIcon.size = 24

export default PrebookIcon
export const PrebookSvg = Prebook
