import React from 'react'

import More from '../../../img/icons/more.svg'
import Icon from '../icon'

const MoreIcon = props => {
  return (
    <Icon {...props}>
      <More />
    </Icon>
  )
}

MoreIcon.size = 24

export default MoreIcon
export const MoreSvg = More
