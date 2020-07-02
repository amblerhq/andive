import React from 'react'

import Seated from '../../../img/icons/seated.svg'
import SvgIcon from '..//svg-icon'

const SeatedIcon = props => {
  return (
    <SvgIcon {...props}>
      <Seated />
    </SvgIcon>
  )
}

SeatedIcon.size = 24

export default SeatedIcon
export const SeatedSvg = Seated
