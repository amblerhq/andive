import React from 'react'

import Seated from '../../../img/icons/seated.svg'
import Icon from '../icon'
import {palette} from '../..'

const SeatedIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Seated />
    </Icon>
  )
}

SeatedIcon.size = 24

export default SeatedIcon
export const SeatedSvg = Seated
