import React from 'react'

import Tpmr from '../../../img/icons/tpmr.svg'
import Icon from '../icon'

const TpmrIcon = props => {
  return (
    <Icon {...props}>
      <Tpmr />
    </Icon>
  )
}

TpmrIcon.size = 24

export default TpmrIcon
export const TpmrSvg = Tpmr
