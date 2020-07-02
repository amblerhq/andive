import React from 'react'

import Book from '../../../img/icons/book.svg'
import SvgIcon from '../svg-icon'

const BookIcon = props => {
  return (
    <SvgIcon {...props}>
      <Book />
    </SvgIcon>
  )
}

BookIcon.size = 24

export default BookIcon
export const BookSvg = Book
