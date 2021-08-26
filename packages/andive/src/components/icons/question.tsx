import React from 'react'
import Question from '../../../img/icons/question.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const QuestionIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Question />
    </SvgIcon>
  )
}

QuestionIcon.size = DEFAULT_SIZE

export default QuestionIcon
export const QuestionSvg = Question
