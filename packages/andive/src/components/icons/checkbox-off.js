import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CheckboxOff from '../../../img/icons/off-squared.svg'
import SvgIcon from '../svg-icon'

const CheckboxOffOverride = styled(CheckboxOff)`
  & > rect {
    stroke: ${props => props.color};
  }
`

const CheckboxOffIcon = props => {
  return (
    <SvgIcon {...props}>
      <CheckboxOffOverride color={props.color} />
    </SvgIcon>
  )
}

CheckboxOffIcon.propTypes = {
  color: PropTypes.string
}
CheckboxOffIcon.size = 24

export default CheckboxOffIcon
export const CheckboxOffSvg = CheckboxOff
