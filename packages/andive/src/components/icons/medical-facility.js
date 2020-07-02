import React from 'react'

import MedicalFacility from '../../../img/icons/medical-facility.svg'
import SvgIcon from '../svg-icon'

const MedicalFacilityIcon = props => {
  return (
    <SvgIcon {...props}>
      <MedicalFacility />
    </SvgIcon>
  )
}

MedicalFacilityIcon.size = 24

export default MedicalFacilityIcon
export const MedicalFacilitySvg = MedicalFacility
