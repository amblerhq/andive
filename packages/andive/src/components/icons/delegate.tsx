import React from 'react'

import Delegate from '../../../img/icons/delegate.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const DelegateIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Delegate />
    </SvgIcon>
  )
}

DelegateIcon.size = DEFAULT_SIZE

export default DelegateIcon
export const DelegateSvg = Delegate
