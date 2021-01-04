import React from 'react'

import Doctor from '../../../img/icons/doctor.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DoctorIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Doctor />
    </SvgIcon>
  )
}

DoctorIcon.size = 40

export default DoctorIcon
export const DoctorSvg = Doctor
