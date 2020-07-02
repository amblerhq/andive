import React from 'react'

import Question from '../../../img/icons/question.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const QuestionIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Question />
    </SvgIcon>
  )
}

QuestionIcon.size = 24

export default QuestionIcon
export const QuestionSvg = Question
