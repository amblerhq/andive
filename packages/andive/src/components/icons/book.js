import React from 'react'

import Book from '../../../img/icons/book.svg'
import Icon from '../icon'

const BookIcon = props => {
  return (
    <Icon {...props}>
      <Book />
    </Icon>
  )
}

BookIcon.size = 24

export default BookIcon
export const BookSvg = Book
