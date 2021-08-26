import React from 'react'
import Search from '../../../img/icons/search.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const SearchIcon = ({color = palette.mediumPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Search />
    </SvgIcon>
  )
}

SearchIcon.size = DEFAULT_SIZE

export default SearchIcon
export const SearchSvg = Search
