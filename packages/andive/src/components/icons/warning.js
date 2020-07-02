import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Warning from '../../../img/icons/warning.svg'
import SvgIcon from '../svg-icon'

const WarningOverride = styled(Warning)`
  & > g > path:nth-of-type(2) {
    fill: ${props => props.color};
    stroke: none;
  }
`

const WarningIcon = props => {
  return (
    <SvgIcon {...props}>
      <WarningOverride color={props.color} />
    </SvgIcon>
  )
}

WarningIcon.propTypes = {
  color: PropTypes.string
}
WarningOverride.size = 24

export default WarningIcon
export const WarningSvg = Warning
