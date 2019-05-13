import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Info from '../info'
import {body1Css} from '../typography'
import {darkGrey} from '../../constants/palette'
import {baselineCss} from '../baseline'

const Destination = styled.div`
  ${baselineCss}

  position: relative;
  padding-left: ${props => (props.time ? 101 : 32)}px;
`

const DestinationIcon = styled.div`
  ${baselineCss}

  position: absolute;
  left: ${props => (props.time ? 69 : 0)}px;
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

const Time = styled.div`
  ${baselineCss}
  ${body1Css}

  position: absolute;
  top: 0;
  left: 0;

  width: 69px;
  height: 38px;

  padding: 8px;

  text-align: right;
`

function DestinationComponent({name, address, time, ...props}) {
  return (
    <Destination time={time} {...props}>
      <DestinationIcon time={time}>
        <DestinationRoad />
        <DestinationPoint />
      </DestinationIcon>
      {time && <Time>{time}</Time>}
      <Info>
        <Info.Label label={name} />
        <Info.Item item={address} />
      </Info>
    </Destination>
  )
}

DestinationComponent.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  time: PropTypes.string
}

export default DestinationComponent
