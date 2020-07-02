import React from 'react'

import Book from '../../../img/icons/book.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const BookIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Book />
    </SvgIcon>
  )
}

BookIcon.size = 24

export default BookIcon
export const BookSvg = Book
