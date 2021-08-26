import React from 'react'
import Regulator from '../../../img/icons/regulator.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const RegulatorIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Regulator />
    </SvgIcon>
  )
}

RegulatorIcon.size = DEFAULT_SIZE

export default RegulatorIcon
export const RegulatorSvg = Regulator
