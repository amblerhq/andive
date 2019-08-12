import React from 'react'

import Kebab from '../../../img/icons/kebab.svg'
import Icon from '../icon'

const KebabIcon = props => {
  return (
    <Icon {...props}>
      <Kebab />
    </Icon>
  )
}

KebabIcon.size = 24

export default KebabIcon
export const KebabSvg = Kebab
