import React from 'react'

import Filter from '../../../img/icons/filter.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FilterIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Filter />
    </SvgIcon>
  )
}

FilterIcon.size = 24

export default FilterIcon
export const FilterSvg = Filter
