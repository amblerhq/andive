import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Info from '../info'
import {darkGrey} from '../../constants/palette'
import {baselineCss} from '../baseline'

const Destination = styled.div`
  ${baselineCss}

  position: relative;
  padding-left: 32px;
`

const DestinationIcon = styled.div`
  ${baselineCss}

  position: absolute;
  left: 0;
  top: 0;

  width: 32px;
  height: 100%;
`

const DestinationPoint = styled.div`
  ${baselineCss}

  position: absolute;

  width: 8px;
  height: 8px;

  left: calc(50% - 4px);
  top: 12px;

  border-radius: 50%;

  border: 2px solid ${darkGrey};
  background: white;
`
const DestinationRoad = styled.div`
  ${baselineCss}

  position: absolute;

  width: 4px;
  height: 16px;

  left: calc(50% - 2px);
  top: 0px;

  background: ${darkGrey};
`

function DestinationComponent({name, address, ...props}) {
  return (
    <Destination {...props}>
      <DestinationIcon>
        <DestinationRoad />
        <DestinationPoint />
      </DestinationIcon>
      <Info>
        <Info.Label label={name} />
        <Info.Item item={address} />
      </Info>
    </Destination>
  )
}

DestinationComponent.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}

export default DestinationComponent
