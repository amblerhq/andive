import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

import {lightBeetrootPurple} from '../constants/palette'
import {ZIndexes} from '../constants/enum'

const LoaderModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  z-index: ${ZIndexes.MODALS - 1};

  background: rgba(256, 256, 256, 0.8);
`

const offset = 187
const duration = '1.4s'

const rotator = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Svg = styled.svg`
  animation: ${rotator} ${duration} linear infinite;
`

const dash = keyframes`
    0% {
        stroke-dashoffset: ${offset};
    }
    50% {
        stroke-dashoffset: ${offset / 4};
    }
    100% {
        stroke-dashoffset: ${offset};
    }
`

const Circle = styled.circle`
  stroke-width: 6;
  fill: none;
  stroke-linecap: round;

  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;

  transform-origin: center;
  animation: ${dash} ${duration} ease-in-out infinite;
`

function Loader({size = 32, color = lightBeetrootPurple, ...props}) {
  return (
    <Svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <Circle cx="33" cy="33" r="30" fill="none" stroke={color} />
    </Svg>
  )
}

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

function LoaderComponent({inline, ...props}) {
  if (inline) {
    return <Loader {...props} />
  }

  return (
    <LoaderModal>
      <Loader {...props} />
    </LoaderModal>
  )
}

LoaderComponent.propTypes = {
  ...Loader.propTypes,
  inline: PropTypes.bool
}

export default LoaderComponent
