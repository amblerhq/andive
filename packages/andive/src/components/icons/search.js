import React from 'react'

import Search from '../../../img/icons/search.svg'
import SvgIcon from '..//svg-icon'

const SearchIcon = props => {
  return (
    <SvgIcon {...props}>
      <Search />
    </SvgIcon>
  )
}

SearchIcon.size = 24

export default SearchIcon
export const SearchSvg = Search
