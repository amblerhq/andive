import React from 'react'

import Doctor from '../../../img/icons/doctor.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const DoctorIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Doctor />
    </SvgIcon>
  )
}

DoctorIcon.size = DEFAULT_SIZE

export default DoctorIcon
export const DoctorSvg = Doctor
