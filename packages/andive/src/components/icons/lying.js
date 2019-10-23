import React from 'react'

import Lying from '../../../img/icons/lying.svg'
import Icon from '../icon'

const LyingIcon = props => {
  return (
    <Icon {...props}>
      <Lying />
    </Icon>
  )
}

LyingIcon.size = 24

export default LyingIcon
export const LyingSvg = Lying
