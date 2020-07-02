import React from 'react'

import Book from '../../../img/icons/book.svg'
import Icon from '../icon'
import {palette} from '../..'

const BookIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Book />
    </Icon>
  )
}

BookIcon.size = 24

export default BookIcon
export const BookSvg = Book
