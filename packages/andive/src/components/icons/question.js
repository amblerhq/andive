import React from 'react'

import Question from '../../../img/icons/question.svg'
import Icon from '../icon'
import {palette} from '../..'

const QuestionIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Question />
    </Icon>
  )
}

QuestionIcon.size = 24

export default QuestionIcon
export const QuestionSvg = Question
