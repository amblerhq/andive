import React from 'react'

import Upload from '../../../img/icons/upload.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const UploadIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Upload />
    </SvgIcon>
  )
}

UploadIcon.size = DEFAULT_SIZE

export default UploadIcon
