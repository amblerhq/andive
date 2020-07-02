import React from 'react'

import Tpmr from '../../../img/icons/tpmr.svg'
import SvgIcon from '..//svg-icon'

const TpmrIcon = props => {
  return (
    <SvgIcon {...props}>
      <Tpmr />
    </SvgIcon>
  )
}

TpmrIcon.size = 24

export default TpmrIcon
export const TpmrSvg = Tpmr
