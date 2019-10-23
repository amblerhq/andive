import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Warning from '../../../img/icons/warning.svg'
import Icon from '../icon'

const WarningOverride = styled(Warning)`
  & > g > path:nth-of-type(2) {
    fill: ${props => props.color};
    stroke: none;
  }
`

const WarningIcon = props => {
  return (
    <Icon {...props}>
      <WarningOverride color={props.color} />
    </Icon>
  )
}

WarningIcon.propTypes = {
  color: PropTypes.string
}
WarningOverride.size = 24

export default WarningIcon
export const WarningSvg = Warning
