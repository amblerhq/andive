import React from 'react'

import Burger from '../../../img/icons/burger.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const BurgerIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Burger />
    </SvgIcon>
  )
}

BurgerIcon.size = 24

export default BurgerIcon
export const BurgerSvg = Burger
