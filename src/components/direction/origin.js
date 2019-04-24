import React, {useRef, useState, useEffect, useCallback} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Info from '../info'
import {darkGrey} from '../../constants/palette'
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
  padding-left: 32px;
`

const OriginIcon = styled.div`
  ${baselineCss}

  position: absolute;
  left: 0;
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
  top: 18px;

  background: ${darkGrey};
`

function OriginComponent({name, address, ...props}) {
  let ref = useRef(null)
  let size = useElementRect(ref)

  return (
    <Origin {...props}>
      <OriginIcon>
        <OriginPoint />
        <OriginRoad height={size ? size.height : 46} />
      </OriginIcon>
      <Info ref={ref}>
        <Info.Label label={name} />
        <Info.Item item={address} />
      </Info>
    </Origin>
  )
}

OriginComponent.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}

export default OriginComponent
