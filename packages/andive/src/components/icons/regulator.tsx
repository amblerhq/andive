import React from 'react'

import Regulator from '../../../img/icons/regulator.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const RegulatorIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Regulator />
    </SvgIcon>
  )
}

RegulatorIcon.size = 24

export default RegulatorIcon
export const RegulatorSvg = Regulator
