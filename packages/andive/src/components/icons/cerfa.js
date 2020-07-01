import React from 'react'

import Cerfa from '../../../img/icons/cerfa.svg'
import Icon from '../icon'
import {palette} from '../..'

const CerfaIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Cerfa />
    </Icon>
  )
}

CerfaIcon.size = 24

export default CerfaIcon
export const CerfaSvg = Cerfa
