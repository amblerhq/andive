import React from 'react'

import CheckboxOn from '../../../img/icons/on-squared.svg'
import Icon from '../icon'
import {palette} from '../..'

const CheckboxOnIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <CheckboxOn />
    </Icon>
  )
}

CheckboxOnIcon.size = 24

export default CheckboxOnIcon
export const CheckboxOnSvg = CheckboxOn
