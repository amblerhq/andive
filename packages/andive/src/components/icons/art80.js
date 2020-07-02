import React from 'react'

import Art80 from '../../../img/icons/art80.svg'
import SvgIcon from '../svg-icon'

const Art80Icon = props => {
  return (
    <SvgIcon {...props}>
      <Art80 />
    </SvgIcon>
  )
}

Art80Icon.size = 24

export default Art80Icon
export const Art80Svg = Art80
