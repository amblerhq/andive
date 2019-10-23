import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Cerfa from '../../../img/icons/cerfa.svg'
import Icon from '../icon'

const CerfaOverride = styled(Cerfa)`
  & > path {
    fill: ${props => props.color};
  }
`

const CerfaIcon = props => {
  return (
    <Icon {...props}>
      <CerfaOverride color={props.color} />
    </Icon>
  )
}

CerfaIcon.propTypes = {
  color: PropTypes.string
}
CerfaOverride.size = 24

export default CerfaIcon
export const CerfaSvg = Cerfa
