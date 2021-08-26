import React from 'react'
import MedicalFacility from '../../../img/icons/medical-facility.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const MedicalFacilityIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <MedicalFacility />
    </SvgIcon>
  )
}

MedicalFacilityIcon.size = DEFAULT_SIZE

export default MedicalFacilityIcon
export const MedicalFacilitySvg = MedicalFacility
