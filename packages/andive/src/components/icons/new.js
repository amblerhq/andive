import React from 'react'

import New from '../../../img/icons/new.svg'
import SvgIcon from '..//svg-icon'

const NewIcon = props => {
  return (
    <SvgIcon {...props}>
      <New />
    </SvgIcon>
  )
}

NewIcon.size = 24

export default NewIcon
export const NewSvg = New
