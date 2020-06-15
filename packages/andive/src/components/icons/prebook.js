import React from 'react'

import Prebook from '../../../img/icons/prebook.svg'
import Icon from '../icon'

const PrebookIcon = props => {
  return (
    <Icon {...props}>
      <Prebook />
    </Icon>
  )
}

PrebookIcon.size = 24

export default PrebookIcon
export const PrebookSvg = Prebook
