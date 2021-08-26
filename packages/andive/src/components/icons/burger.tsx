import React from 'react'

import Burger from '../../../img/icons/burger.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const BurgerIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Burger />
    </SvgIcon>
  )
}

BurgerIcon.size = DEFAULT_SIZE

export default BurgerIcon
export const BurgerSvg = Burger
