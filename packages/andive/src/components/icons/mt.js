import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Mt from '../../../img/icons/mt.svg'
import Icon from '../icon'

const MtOverride = styled(Mt)`
  & path:nth-of-type(3) {
    fill: ${props => props.color};
  }
`

const MtIcon = props => {
  return (
    <Icon {...props}>
      <MtOverride color={props.color} />
    </Icon>
  )
}

MtIcon.propTypes = {
  color: PropTypes.string
}
MtOverride.size = 40

export default MtIcon
export const MtSvg = Mt
