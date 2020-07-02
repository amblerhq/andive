import React from 'react'

import Euro from '../../../img/icons/euro.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const EuroIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Euro />
    </SvgIcon>
  )
}

EuroIcon.size = 24

export default EuroIcon
export const EuroSvg = Euro
