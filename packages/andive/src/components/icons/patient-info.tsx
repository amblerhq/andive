import React from 'react'

import Infos from '../../../img/icons/infos.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const InfosIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Infos />
    </SvgIcon>
  )
}

InfosIcon.size = DEFAULT_SIZE

export default InfosIcon
export const InfosSvg = Infos
