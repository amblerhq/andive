import React from 'react'

import Infos from '../../../img/icons/infos.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const InfosIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Infos />
    </SvgIcon>
  )
}

InfosIcon.size = 24

export default InfosIcon
export const InfosSvg = Infos
