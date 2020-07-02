import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CheckboxOn from '../../../img/icons/on-squared.svg'
import SvgIcon from '..//svg-icon'

const CheckboxOnOverride = styled(CheckboxOn)`
  & > g > rect {
    fill: ${props => props.color};
    stroke: ${props => props.color};
  }

  & > g > path {
    stroke: white;
  }
`

const CheckboxOnIcon = props => {
  return (
    <SvgIcon {...props}>
      <CheckboxOnOverride color={props.color} />
    </SvgIcon>
  )
}

CheckboxOnIcon.propTypes = {
  color: PropTypes.string
}
CheckboxOnOverride.size = 24

export default CheckboxOnIcon
export const CheckboxOnSvg = CheckboxOn
