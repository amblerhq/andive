import React from 'react'

import PickUp from '../../../img/icons/pick-up.svg'
import Icon from '../icon'

const PickUpIcon = props => {
  return (
    <Icon {...props}>
      <PickUp />
    </Icon>
  )
}

PickUpIcon.size = 24

export default PickUpIcon
export const PickUpSvg = PickUp
