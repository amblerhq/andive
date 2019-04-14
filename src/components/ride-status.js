import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Body2} from './typography'
import {baselineCss} from './baseline'

import RideStatusBar from './ride-status-bar'

const RideStatus = styled.div`
  ${baselineCss}

  width: 100%;
  height: 64px;

  padding: 8px 8px 8px 24px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  position: relative;
`

const InlineStatusBar = styled(RideStatusBar)`
  position: absolute;
  top: 0;
  left: 0;
`

const PrimaryStatus = styled(Body2)``

const SecondaryStatus = styled(Body2)`
  font-style: ${props => (props.secondaryItalic ? 'italic' : 'none')};
`

export default function RideStatusComponent({primary, secondary, secondaryItalic, color, ...props}) {
  return (
    <RideStatus color={color} {...props}>
      <InlineStatusBar color={color} />
      {primary && <PrimaryStatus>{primary}</PrimaryStatus>}
      {secondary && <SecondaryStatus secondaryItalic={secondaryItalic}>{secondary}</SecondaryStatus>}
    </RideStatus>
  )
}

RideStatusComponent.propTypes = {
  primary: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  secondaryItalic: PropTypes.bool
}
