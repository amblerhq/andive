import React from 'react'

import MedicalFacility from '../../../img/icons/medical-facility.svg'
import Icon from '../icon'
import {palette} from '../..'

const MedicalFacilityIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <MedicalFacility />
    </Icon>
  )
}

MedicalFacilityIcon.size = 24

export default MedicalFacilityIcon
export const MedicalFacilitySvg = MedicalFacility
