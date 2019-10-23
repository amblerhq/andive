import React from 'react'

import MedicalFacility from '../../../img/icons/medical-facility.svg'
import Icon from '../icon'

const MedicalFacilityIcon = props => {
  return (
    <Icon {...props}>
      <MedicalFacility />
    </Icon>
  )
}

MedicalFacilityIcon.size = 24

export default MedicalFacilityIcon
export const MedicalFacilitySvg = MedicalFacility
