import React from 'react'

import Mt from '../../../img/icons/mt.svg'
import Icon from '../icon'
import {palette} from '../..'

const MtIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Mt />
    </Icon>
  )
}

MtIcon.size = 40

export default MtIcon
export const MtSvg = Mt
