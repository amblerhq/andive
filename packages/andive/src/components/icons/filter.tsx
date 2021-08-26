import React from 'react'

import Filter from '../../../img/icons/filter.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const FilterIcon = ({color = palette.mediumPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Filter />
    </SvgIcon>
  )
}

FilterIcon.size = DEFAULT_SIZE

export default FilterIcon
export const FilterSvg = Filter
