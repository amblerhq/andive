import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Question from '../../../img/icons/question.svg'
import SvgIcon from '..//svg-icon'

const QuestionOverride = styled(Question)`
  & > g > path:nth-of-type(2) {
    fill: ${props => props.color};
  }
`

const QuestionIcon = props => {
  return (
    <SvgIcon {...props}>
      <QuestionOverride color={props.color} />
    </SvgIcon>
  )
}

QuestionIcon.propTypes = {
  color: PropTypes.string
}
QuestionOverride.size = 24

export default QuestionIcon
export const QuestionSvg = Question
