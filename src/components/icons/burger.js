import React from 'react'

import Burger from '../../../img/icons/burger.svg'
import Icon from '../icon'

const BurgerIcon = props => {
  return (
    <Icon {...props}>
      <Burger />
    </Icon>
  )
}

BurgerIcon.size = 24

export default BurgerIcon
export const BurgerSvg = Burger
