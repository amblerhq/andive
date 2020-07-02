import React from 'react'

import Burger from '../../../img/icons/burger.svg'
import SvgIcon from '../svg-icon'

const BurgerIcon = props => {
  return (
    <SvgIcon {...props}>
      <Burger />
    </SvgIcon>
  )
}

BurgerIcon.size = 24

export default BurgerIcon
export const BurgerSvg = Burger
