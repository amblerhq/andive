import React from 'react'

import Search from '../../../img/icons/search.svg'
import Icon from '../icon'
import {palette} from '../..'

const SearchIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Search />
    </Icon>
  )
}

SearchIcon.size = 24

export default SearchIcon
export const SearchSvg = Search
