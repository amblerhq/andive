import React from 'react'

import Question from '../../../img/icons/question.svg'
import Icon from '../icon'

const QuestionIcon = props => {
  return (
    <Icon {...props}>
      <Question />
    </Icon>
  )
}

QuestionIcon.size = 24

export default QuestionIcon
export const QuestionSvg = Question
