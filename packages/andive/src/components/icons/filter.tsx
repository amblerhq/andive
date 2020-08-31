import React from 'react'

import Filter from '../../../img/icons/filter.svg'
import Icon from '../icon'

const FilterIcon = props => {
  return (
    <Icon {...props}>
      <Filter />
    </Icon>
  )
}

FilterIcon.size = 24

export default FilterIcon
export const FilterSvg = Filter