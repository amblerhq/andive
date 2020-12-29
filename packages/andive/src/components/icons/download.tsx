import React from 'react'

import Download from '../../../img/icons/download.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DownloadIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Download />
    </SvgIcon>
  )
}

DownloadIcon.size = 24

export default DownloadIcon
export const DownloadSvg = Download
