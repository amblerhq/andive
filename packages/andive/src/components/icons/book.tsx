import React from 'react'

import Book from '../../../img/icons/book.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const BookIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Book />
    </SvgIcon>
  )
}

BookIcon.size = DEFAULT_SIZE

export default BookIcon
export const BookSvg = Book
