import React from 'react'
import SadRegulator from '../../../img/icons/sad-regulator.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const SadRegulatorIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <SadRegulator />
    </SvgIcon>
  )
}

SadRegulatorIcon.size = DEFAULT_SIZE

export default SadRegulatorIcon
export const SadRegulatorSvg = SadRegulator
