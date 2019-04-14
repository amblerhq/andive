import React from 'react'

import Seated from '../../../img/icons/seated.svg'
import Icon from '../icon'

const SeatedIcon = props => {
  return (
    <Icon {...props}>
      <Seated />
    </Icon>
  )
}

SeatedIcon.size = 24

export default SeatedIcon
export const SeatedSvg = Seated
