import React from 'react'

import Burger from '../../../img/icons/burger.svg'
import Icon from '../icon'
import {palette} from '../..'

const BurgerIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Burger />
    </Icon>
  )
}

BurgerIcon.size = 24

export default BurgerIcon
export const BurgerSvg = Burger
