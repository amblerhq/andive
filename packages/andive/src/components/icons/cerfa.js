import React from 'react'

import Cerfa from '../../../img/icons/cerfa.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const CerfaIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Cerfa />
    </SvgIcon>
  )
}

CerfaIcon.size = 24

export default CerfaIcon
export const CerfaSvg = Cerfa
