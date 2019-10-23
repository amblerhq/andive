import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Info from '../info'
import Origin from './origin'
import Destination from './destination'

const Direction = styled.div`
  min-width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: ${props => (props.nopadding ? 0 : '8px')};
`

function DirectionComponent({children, label, fullWidth, nopadding, ...props}) {
  return (
    <Direction fullWidth={fullWidth} nopadding={nopadding} {...props}>
      {label && (
        <Info>
          <Info.Label label={label} />
        </Info>
      )}
      {React.Children.map(children, child => {
        const childProps = {}
        if (label) {
          childProps.label = ' '
        }
        return React.cloneElement(child, childProps)
      })}
    </Direction>
  )
}

DirectionComponent.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  nopadding: PropTypes.bool
}

DirectionComponent.Origin = Origin
DirectionComponent.Destination = Destination

export default DirectionComponent
