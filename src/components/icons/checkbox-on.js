import React from 'react'

import CheckboxOn from '../../../img/icons/on-squared.svg'
import Icon from '../icon'

const CheckboxOnIcon = props => {
  return (
    <Icon {...props}>
      <CheckboxOn />
    </Icon>
  )
}

CheckboxOnIcon.size = 24

export default CheckboxOnIcon
export const CheckboxOnSvg = CheckboxOn
