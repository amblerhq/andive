import React, {useRef} from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import useElementRect from '../../lib/use-element-rect'
import {Body1, isTypography} from '../typography'
import {darkGrey} from '../../constants/palette'
import {baselineCss} from '../baseline'

const Destination = styled.div`
  ${baselineCss}

  position: relative;
  padding-left: ${props => (props.label ? 101 : 32)}px;
`

const DestinationIcon = styled.div`
  ${baselineCss}

  position: absolute;
  left: ${props => (props.label ? 69 : 0)}px;
  top: 0;

  width: 32px;
  height: 100%;
`

const DestinationPoint = styled.div`
  ${baselineCss}

  position: absolute;

  width: 8px;
  height: 8px;

  left: calc(50% - 12px);
  top: ${props => props.offsetY || 4}px;

  border-radius: 50%;

  border: 2px solid ${darkGrey};
  background: white;
`
const DestinationRoad = styled.div`
  ${baselineCss}

  position: absolute;

  left: calc(50% - 10px);
  width: 4px;

  ${props => {
    if (props.offsetY) {
      return css`
        top: 0;
        height: ${props => props.offsetY + 4}px;
      `
    }

    return css`
      top: 0;
      height: 8px;
    `
  }}
 

  background: ${darkGrey};
`

const AsideLabel = styled(Body1)`
  ${baselineCss}

  position: absolute;
  top: ${props => (props.offsetY ? props.offsetY - 16 : -10)}px;
  left: 0;

  width: 61px;
  min-height: 38px;

  padding: 8px;

  text-align: right;
`

function DestinationComponent({label, children, ...props}) {
  const ref = useRef(null)
  const size = useElementRect(ref)
  const pointRef = useRef(null)
  const pointSize = useElementRect(pointRef)

  let offsetY = 0
  // Basic math: To get the center of the pointRef element we just:
  if (pointSize && size) {
    // By calculating the distance between the top of the Destination content and the
    // pointRef element we take into account any number of previous sibling components.
    const topToPointRef = pointSize.y - size.y

    // If the point of reference is a Typography component, because of the way we align
    // those on top of their container (leaving a small gap under the text and the bottom
    // limit of the <div /> element), we should adjust the center 2px above the real one
    // to match the visual center of the Typography.
    const compensate = isTypography(pointRef) ? 2 : 0

    offsetY = topToPointRef + pointSize.height / 2 - 4 - compensate
  }

  return (
    <Destination label={label} {...props}>
      <DestinationIcon label={label}>
        <DestinationRoad offsetY={offsetY} />
        <DestinationPoint offsetY={offsetY} />
      </DestinationIcon>
      {label && <AsideLabel offsetY={offsetY}>{label}</AsideLabel>}
      {children && (
        <>
          {typeof children === 'function' && children(ref, pointRef)}
          {typeof children !== 'function' && children}
        </>
      )}
    </Destination>
  )
}

DestinationComponent.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
}

export default DestinationComponent
