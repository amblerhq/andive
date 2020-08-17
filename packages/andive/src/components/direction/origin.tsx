import React, {useRef} from 'react'
import styled, {css} from 'styled-components'

import useElementRect from '../../lib/use-element-rect'
import * as palette from '../../constants/palette'
import {Body1} from '../typography'

const OriginRoot = styled(({label, ...props}) => <div {...props} />)`
  position: relative;
  padding-left: ${props => (props.label ? 24 + 61 : 24)}px;
`

const OriginIcon = styled(({label, ...props}) => <div {...props} />)`
  position: absolute;
  left: ${props => (props.label ? 69 : 0)}px;
  top: 0;

  width: 24px;
  height: 100%;
`

const OriginPoint = styled(({offsetY, ...props}) => <div {...props} />)`
  position: absolute;

  width: 8px;
  height: 8px;

  left: calc(50% - 12px);
  top: ${props => (props.offsetY ? props.offsetY - 4 : 4)}px;

  border-radius: 50%;

  border: 2px solid ${palette.darkPrimary};
  background: white;
`
const OriginRoad = styled(({offsetY, height, ...props}) => <div {...props} />)`
  position: absolute;

  left: calc(50% - 10px);
  width: 4px;

  ${props => {
    if (props.offsetY) {
      return css`
        top: ${props.offsetY}px;
        height: ${props.height - props.offsetY}px;
      `
    }

    // Old use-case. Should be removed.
    return css`
      top: 8px;
      height: ${props.height - 8}px;
    `
  }}

  background: ${palette.darkPrimary};
`

const AsideLabel = styled(({ offsetY, ...props }) => <Body1 {...props}/>)`
  position: absolute;
  top: ${props => (props.offsetY ? props.offsetY - 20 : -8)}px;
  left: 0;

  width: 69px;
  min-height: 38px;

  padding: 8px;

  text-align: right;
`

interface OriginProps<PointRefElementType> {
  className?: string,
  label?: string,
  children: React.ReactNode | ((ref: React.Ref<HTMLDivElement>, pointRef: React.Ref<PointRefElementType>) => React.ReactNode)
}
export function Origin<PointRefElementType>({className, label, children}: OriginProps<PointRefElementType>) {
  const ref = useRef(null)
  const pointRef = useRef(null)
  const size = useElementRect(ref)
  const pointSize = useElementRect(pointRef)

  // Basic math: To get the center of the pointRef element we just:
  const offsetY = (pointSize && size && pointSize.y - size.y + pointSize.height / 2) || 0

  return (
    <OriginRoot className={className} label={label}>
      <OriginIcon label={label} size={size ? size.height : 46}>
        <OriginRoad height={size ? size.height : 46} offsetY={offsetY} />
        <OriginPoint offsetY={offsetY} />
      </OriginIcon>
      {label && <AsideLabel offsetY={offsetY}>{label}</AsideLabel>}
      {children && (
        <>
          {typeof children === 'function' && children(ref, pointRef)}
          {typeof children !== 'function' && <div ref={ref}>{children}</div>}
        </>
      )}
    </OriginRoot>
  )
}