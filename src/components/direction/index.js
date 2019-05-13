import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Info from '../info'
import Origin from './origin'
import Destination from './destination'

const Direction = styled.div`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
`

function DirectionComponent({children, time, fullWidth, ...props}) {
  return (
    <Direction fullWidth={fullWidth} {...props}>
      {time && (
        <Info>
          <Info.Label label={time} />
        </Info>
      )}
      {React.Children.map(children, child => {
        const childProps = {}
        if (time) {
          childProps.time = ' '
        }
        return React.cloneElement(child, childProps)
      })}
    </Direction>
  )
}

DirectionComponent.propTypes = {
  children: PropTypes.node,
  time: PropTypes.string,
  fullWidth: PropTypes.bool
}

DirectionComponent.Origin = Origin
DirectionComponent.Destination = Destination

export default DirectionComponent
