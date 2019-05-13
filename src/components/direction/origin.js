import React, {useRef, useState, useEffect, useCallback} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Info from '../info'
import {darkGrey} from '../../constants/palette'
import {body1Css} from '../typography'
import {baselineCss} from '../baseline'

function useElementRect(ref) {
  const [rect, setRect] = useState(null)

  const onResize = useCallback(() => {
    if (ref.current) {
      setRect(() => ref.current.getBoundingClientRect())
    }
  }, [ref.current])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return rect
}

const Origin = styled.div`
  ${baselineCss}

  position: relative;
  padding-left: ${props => (props.time ? 101 : 32)}px;
`

const OriginIcon = styled.div`
  ${baselineCss}

  position: absolute;
  left: ${props => (props.time ? 69 : 0)}px;
  top: 0;

  width: 32px;
  height: 100%;
`

const OriginPoint = styled.div`
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
const OriginRoad = styled.div`
  ${baselineCss}

  position: absolute;

  width: 4px;
  height: ${props => props.height - 16}px;

  left: calc(50% - 2px);
  top: 16px;

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

function OriginComponent({name, address, time, ...props}) {
  let ref = useRef(null)
  let size = useElementRect(ref)

  return (
    <Origin time={time} {...props}>
      <OriginIcon time={time}>
        <OriginRoad height={size ? size.height : 46} />
        <OriginPoint />
      </OriginIcon>
      {time && <Time>{time}</Time>}
      <Info ref={ref}>
        <Info.Label label={name} />
        <Info.Item item={address} />
      </Info>
    </Origin>
  )
}

OriginComponent.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  time: PropTypes.string
}

export default OriginComponent
