import React from 'react'

import More from '../../../img/icons/more.svg'
import SvgIcon from '../svg-icon'

const MoreIcon = props => {
  return (
    <SvgIcon {...props}>
      <More />
    </SvgIcon>
  )
}

MoreIcon.size = 24

export default MoreIcon
export const MoreSvg = More
