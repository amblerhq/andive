import React from 'react'
import styled, {css} from 'styled-components'

import {isTypography} from '../typography'
import * as palette from '../../constants/palette'
import {DirectionVariant} from '.'

const DestinationRoot = styled(({label, ...props}) => <div {...props} />)`
  position: relative;
  padding-left: ${props => (props.label ? 32 + 69 : 24)}px;
`

const DestinationIcon = styled(({label, ...props}) => <div {...props} />)`
  position: absolute;
  left: ${props => (props.label ? 69 : 0)}px;
  top: 0;

  width: ${props => (props.label ? 32 : 24)}px;
  height: 100%;
  padding: ${props => (props.label ? '0 16px 0 8px' : '0 16px 0 0')};
`

const DestinationIconContent = styled.div`
  position: relative;
  height: 100%;
`

const DestinationPoint = styled(({offsetY, centered, ...props}) => <div {...props} />)`
  position: absolute;

  width: 8px;
  height: 8px;

  left: calc(50% - 4px);
  ${props => {
    if (props.centered) {
      return `
        top: ${props.offsetY || 4}px;
      `
    }
    return 'top: 8px;'
  }}

  border-radius: 50%;

  border: 2px solid ${palette.darkPrimary};
  background: white;
`
const DestinationRoad = styled(({offsetY, centered, ...props}) => <div {...props} />)`
  position: absolute;

  left: calc(50% - 2px);
  width: 4px;

  ${props => {
    if (props.centered && props.offsetY) {
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

const AsideLabel = styled.div`
  position: absolute;
  top: 0px;
  left: -8px;

  width: 69px;
  min-height: 38px;

  text-align: right;
`

type DestinationContextType = {
  ref: React.Ref<HTMLElement | null>
} | null

const DestinationContext = React.createContext<DestinationContextType>(null)

type PointProps = {
  children: React.ReactElement
}

function Point(props: PointProps) {
  const contextValue = React.useContext(DestinationContext)
  return React.cloneElement(props.children, contextValue ? {ref: contextValue.ref} : undefined)
}

interface DestinationProps<PointRefElementType> {
  className?: string
  label?: React.ReactNode
  children: React.ReactNode
  variant?: DirectionVariant
}
export function Destination<PointRefElementType>({
  label,
  children,
  variant,
  ...props
}: DestinationProps<PointRefElementType>) {
  const [rect, setRect] = React.useState<DOMRect | ClientRect>()
  const [pointRect, setPointRect] = React.useState<DOMRect | ClientRect>()
  const ref = React.useRef<HTMLDivElement>(null)
  const pointRef = React.useRef<HTMLElement>(null)

  React.useLayoutEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
    if (pointRef.current) {
      setPointRect(pointRef.current.getBoundingClientRect())
    }
  }, [])

  React.useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect())
      }
      if (pointRef.current) {
        setPointRect(pointRef.current.getBoundingClientRect())
      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect())
      }
      if (pointRef.current) {
        setPointRect(pointRef.current.getBoundingClientRect())
      }
    })

    if (ref.current) {
      observer.observe(ref.current, {childList: true, characterData: true, subtree: true})
      return () => observer.disconnect()
    }
    return
  }, [])

  let offsetY = 0
  // Basic math: To get the center of the pointRef element we just:
  if (pointRect && rect) {
    // By calculating the distance between the top of the Destination content and the
    // pointRef element we take into account any number of previous sibling components.
    const topToPointRef = pointRect.top - rect.top

    // If the point of reference is a Typography component, because of the way we align
    // those on top of their container (leaving a small gap under the text and the bottom
    // limit of the <div /> element), we should adjust the center 2px above the real one
    // to match the visual center of the Typography.
    const compensate = isTypography(pointRef) ? 2 : 0

    offsetY = topToPointRef + pointRect.height / 2 - 4 - compensate
  }

  const centered = variant === 'centered'

  return (
    <DestinationRoot label={label} {...props}>
      <DestinationIcon label={label}>
        <DestinationIconContent>
          <DestinationRoad offsetY={offsetY} centered={centered} />
          <DestinationPoint offsetY={offsetY} centered={centered} />
        </DestinationIconContent>
      </DestinationIcon>
      {label && <AsideLabel>{label}</AsideLabel>}
      <div ref={ref}>
        <DestinationContext.Provider value={{ref: pointRef}}>{children}</DestinationContext.Provider>
      </div>
    </DestinationRoot>
  )
}

Destination.Point = Point
