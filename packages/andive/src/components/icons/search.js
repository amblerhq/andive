import React from 'react'

import Search from '../../../img/icons/search.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const SearchIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Search />
    </SvgIcon>
  )
}

SearchIcon.size = 24

export default SearchIcon
export const SearchSvg = Search
