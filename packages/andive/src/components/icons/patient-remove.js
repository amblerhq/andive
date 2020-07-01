import React from 'react'

import PatientRemove from '../../../img/icons/patient-remove.svg'
import Icon from '../icon'
import {palette} from '../..'

const PatientRemoveIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <PatientRemove />
    </Icon>
  )
}

PatientRemoveIcon.size = 24

export default PatientRemoveIcon
export const PatientRemoveSvg = PatientRemove
