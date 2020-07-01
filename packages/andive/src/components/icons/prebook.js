import React from 'react'

import Prebook from '../../../img/icons/prebook.svg'
import Icon from '../icon'
import {palette} from '../..'

const PrebookIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Prebook />
    </Icon>
  )
}

PrebookIcon.size = 24

export default PrebookIcon
export const PrebookSvg = Prebook
