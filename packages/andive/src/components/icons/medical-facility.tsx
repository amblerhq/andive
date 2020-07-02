import React from 'react'

import MedicalFacility from '../../../img/icons/medical-facility.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const MedicalFacilityIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <MedicalFacility />
    </SvgIcon>
  )
}

MedicalFacilityIcon.size = 24

export default MedicalFacilityIcon
export const MedicalFacilitySvg = MedicalFacility
