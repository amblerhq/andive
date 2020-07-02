import React from 'react'

import Prebook from '../../../img/icons/prebook.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PrebookIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Prebook />
    </SvgIcon>
  )
}

PrebookIcon.size = 24

export default PrebookIcon
export const PrebookSvg = Prebook
