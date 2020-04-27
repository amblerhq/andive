import React from 'react'

import Search from '../../../img/icons/search.svg'
import Icon from '../icon'

const SearchIcon = props => {
  return (
    <Icon {...props}>
      <Search />
    </Icon>
  )
}

SearchIcon.size = 24

export default SearchIcon
export const SearchSvg = Search
