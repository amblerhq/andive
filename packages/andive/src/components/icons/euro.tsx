import React from 'react'

import Euro from '../../../img/icons/euro.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const EuroIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Euro />
    </SvgIcon>
  )
}

EuroIcon.size = DEFAULT_SIZE

export default EuroIcon
export const EuroSvg = Euro
