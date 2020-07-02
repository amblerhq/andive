import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RadioOn from '../../../img/icons/on-round.svg'
import SvgIcon from '..//svg-icon'

const RadioOnOverride = styled(RadioOn)`
  & > g > circle:nth-of-type(1) {
    fill: ${props => props.color};
    stroke: none;
  }

  & > g > circle:nth-of-type(2) {
    fill: white;
    stroke: white;
  }
`

const RadioOnIcon = props => {
  return (
    <SvgIcon {...props}>
      <RadioOnOverride color={props.color} />
    </SvgIcon>
  )
}

RadioOnIcon.propTypes = {
  color: PropTypes.string
}
RadioOnOverride.size = 24

export default RadioOnIcon
export const RadioOnSvg = RadioOn
