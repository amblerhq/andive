import React from 'react'

import CheckboxOn from '../../../img/icons/on-squared.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const CheckboxOnIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <CheckboxOn />
    </SvgIcon>
  )
}

CheckboxOnIcon.size = 24

export default CheckboxOnIcon
export const CheckboxOnSvg = CheckboxOn
