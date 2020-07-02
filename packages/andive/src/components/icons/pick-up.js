import React from 'react'

import PickUp from '../../../img/icons/pick-up.svg'
import SvgIcon from '..//svg-icon'

const PickUpIcon = props => {
  return (
    <SvgIcon {...props}>
      <PickUp />
    </SvgIcon>
  )
}

PickUpIcon.size = 24

export default PickUpIcon
export const PickUpSvg = PickUp
