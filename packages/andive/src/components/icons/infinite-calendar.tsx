import React from 'react'

import InfiniteCalendar from '../../../img/icons/infinite-calendar.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const InfiniteCalendarIcon = ({color = palette.darkPotatoYellow, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <InfiniteCalendar />
    </SvgIcon>
  )
}

InfiniteCalendarIcon.size = DEFAULT_SIZE

export default InfiniteCalendarIcon
export const InfiniteCalendarSvg = InfiniteCalendar
