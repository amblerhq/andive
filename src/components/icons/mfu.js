import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Mfu from '../../../img/icons/mfu.svg'
import Icon from '../icon'

const MfuOverride = styled(Mfu)`
  & > g > text {
    fill: ${props => props.color};
  }
`

const MfuIcon = props => {
  return (
    <Icon {...props}>
      <MfuOverride color={props.color} />
    </Icon>
  )
}

MfuIcon.propTypes = {
  color: PropTypes.string
}
MfuOverride.size = 40

export default MfuIcon
export const MfuSvg = Mfu
