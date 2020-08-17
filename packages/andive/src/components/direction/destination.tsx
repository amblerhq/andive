import React, {useRef} from 'react'
import styled, {css} from 'styled-components'

import useElementRect from '../../lib/use-element-rect'
import {Body1, isTypography} from '../typography'
import * as palette from '../../constants/palette'

const DestinationRoot = styled(({label, ...props}) => <div {...props} />)`
  position: relative;
  padding-left: ${props => (props.label ? 24 + 61 : 24)}px;
`

const DestinationIcon = styled(({label, ...props}) => <div {...props} />)`
  position: absolute;
  left: ${props => (props.label ? 69 : 0)}px;
  top: 0;

  width: 24px;
  height: 100%;
`

const DestinationPoint = styled(({ offsetY, ...props }) => <div {...props} />)`
  position: absolute;

  width: 8px;
  height: 8px;

  left: calc(50% - 12px);
  top: ${props => props.offsetY || 4}px;

  border-radius: 50%;

  border: 2px solid ${palette.darkPrimary};
  background: white;
`
const DestinationRoad = styled(({ offsetY, ...props }) => <div {...props} />)`
  position: absolute;

  left: calc(50% - 10px);
  width: 4px;

  ${props => {
    if (props.offsetY) {
      return css`
        top: 0;
        height: ${props.offsetY + 4}px;
      `
    }

    return css`
      top: 0;
      height: 8px;
    `
  }}
 

  background: ${palette.darkPrimary};
`

const AsideLabel = styled(({ offsetY, ...props }) => <Body1 {...props} />)`
  position: absolute;
  top: ${props => (props.offsetY ? props.offsetY - 16 : -10)}px;
  left: 0;

  width: 69px;
  min-height: 38px;

  padding: 8px;

  text-align: right;
`

interface DestinationProps<PointRefElementType> {
  className?: string,
  label?: string,
  children: React.ReactNode | ((ref: React.Ref<HTMLDivElement>, pointRef: React.Ref<PointRefElementType>) => React.ReactNode)
}
export function Destination<PointRefElementType>({label, children, ...props}: DestinationProps<PointRefElementType>) {
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
    <DestinationRoot label={label} {...props}>
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
    </DestinationRoot>
  )
}