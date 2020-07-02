import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Mf from '../../../img/icons/mf.svg'
import SvgIcon from '../svg-icon'

const MfOverride = styled(Mf)`
  & > g > text {
    fill: ${props => props.color};
  }
`

const MfIcon = props => {
  return (
    <SvgIcon {...props}>
      <MfOverride color={props.color} />
    </SvgIcon>
  )
}

MfIcon.propTypes = {
  color: PropTypes.string
}
MfOverride.size = 40

export default MfIcon
export const MfSvg = Mf
