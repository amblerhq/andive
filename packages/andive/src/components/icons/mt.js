import React from 'react'

import Mt from '../../../img/icons/mt.svg'
import Icon from '../icon'

const MtIcon = props => {
  return (
    <Icon {...props}>
      <Mt />
    </Icon>
  )
}

MtIcon.size = 40

export default MtIcon
export const MtSvg = Mt
