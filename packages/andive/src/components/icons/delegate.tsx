import React from 'react'

import Delegate from '../../../img/icons/delegate.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DelegateIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Delegate />
    </SvgIcon>
  )
}

DelegateIcon.size = 24

export default DelegateIcon
export const DelegateSvg = Delegate
