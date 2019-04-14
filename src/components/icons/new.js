import React from 'react'

import New from '../../../img/icons/new.svg'
import Icon from '../icon'

const NewIcon = props => {
  return (
    <Icon {...props}>
      <New />
    </Icon>
  )
}

NewIcon.size = 24

export default NewIcon
export const NewSvg = New
