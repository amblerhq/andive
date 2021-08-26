import React from 'react'

import Cerfa from '../../../img/icons/cerfa.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const CerfaIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Cerfa />
    </SvgIcon>
  )
}

CerfaIcon.size = DEFAULT_SIZE

export default CerfaIcon
export const CerfaSvg = Cerfa
