import React from 'react'

import Euro from '../../../img/icons/euro.svg'
import Icon from '../icon'
import {palette} from '../..'

const EuroIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Euro />
    </Icon>
  )
}

EuroIcon.size = 24

export default EuroIcon
export const EuroSvg = Euro
