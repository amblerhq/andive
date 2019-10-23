import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CheckboxOff from '../../../img/icons/off-squared.svg'
import Icon from '../icon'

const CheckboxOffOverride = styled(CheckboxOff)`
  & > rect {
    stroke: ${props => props.color};
  }
`

const CheckboxOffIcon = props => {
  return (
    <Icon {...props}>
      <CheckboxOffOverride color={props.color} />
    </Icon>
  )
}

CheckboxOffIcon.propTypes = {
  color: PropTypes.string
}
CheckboxOffIcon.size = 24

export default CheckboxOffIcon
export const CheckboxOffSvg = CheckboxOff
