import React from 'react'
import CheckboxOn from '../../../img/icons/on-squared.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const CheckboxOnIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <CheckboxOn />
    </SvgIcon>
  )
}

CheckboxOnIcon.size = DEFAULT_SIZE

export default CheckboxOnIcon
export const CheckboxOnSvg = CheckboxOn
