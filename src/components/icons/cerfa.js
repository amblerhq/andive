import React from 'react'

import Cerfa from '../../../img/icons/cerfa.svg'
import Icon from '../icon'

const CerfaIcon = props => {
  return (
    <Icon {...props}>
      <Cerfa />
    </Icon>
  )
}

CerfaIcon.size = 24

export default CerfaIcon
export const CerfaSvg = Cerfa
