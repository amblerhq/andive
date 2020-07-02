import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Mfu from '../../../img/icons/mfu.svg'
import SvgIcon from '..//svg-icon'

const MfuOverride = styled(Mfu)`
  & > g > text {
    fill: ${props => props.color};
  }
`

const MfuIcon = props => {
  return (
    <SvgIcon {...props}>
      <MfuOverride color={props.color} />
    </SvgIcon>
  )
}

MfuIcon.propTypes = {
  color: PropTypes.string
}
MfuOverride.size = 40

export default MfuIcon
export const MfuSvg = Mfu
