import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Origin from './origin'
import Destination from './destination'

const Direction = styled.div`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
`

function DirectionComponent({children, fullWidth, ...props}) {
  return (
    <Direction fullWidth={fullWidth} {...props}>
      {children}
    </Direction>
  )
}

DirectionComponent.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool
}

DirectionComponent.Origin = Origin
DirectionComponent.Destination = Destination

export default DirectionComponent
