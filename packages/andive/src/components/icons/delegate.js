import React from 'react'

import Delegate from '../../../img/icons/delegate.svg'
import Icon from '../icon'
import {palette} from '../..'

const DelegateIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Delegate />
    </Icon>
  )
}

DelegateIcon.size = 24

export default DelegateIcon
export const DelegateSvg = Delegate
