import React from 'react'
import styled, {css} from 'styled-components'
import {DirectionVariant} from '.'

import * as palette from '../../constants/palette'

const OriginRoot = styled(({label, ...props}) => <div {...props} />)`
  position: relative;
  padding-left: ${props => (props.label ? 32 + 69 : 24)}px;
`

const OriginIcon = styled(({label, ...props}) => <div {...props} />)`
  position: absolute;
  left: ${props => (props.label ? 69 : 0)}px;
  top: 0;

  width: ${props => (props.label ? 32 : 24)}px;
  height: 100%;
  padding: ${props => (props.label ? '0 16px 0 8px' : '0 16px 0 0')};
`

const OriginIconContent = styled.div`
  position: relative;
  height: 100%;
`

const OriginPoint = styled(({offsetY, centered, ...props}) => <div {...props} />)`
  position: absolute;

  width: 8px;
  height: 8px;

  left: calc(50% - 4px);
  ${props => {
    if (props.centered) {
      return `
        top: ${props.offsetY ? props.offsetY - 4 : 4}px;
      `
    }
    return 'top: 8px;'
  }}

  border-radius: 50%;

  border: 2px solid ${palette.darkPrimary};
  background: white;
`

const OriginRoad = styled(({offsetY, centered, height, ...props}) => <div {...props} />)`
  position: absolute;

  left: calc(50% - 2px);
  width: 4px;

  ${props => {
    if (props.centered && props.offsetY) {
      return css`
        top: ${props.offsetY}px;
        height: ${props.height - props.offsetY}px;
      `
    }

    return css`
      top: 12px;
      height: ${props.height - 8}px;
    `
  }}

  background: ${palette.darkPrimary};
`

const AsideLabel = styled.div`
  position: absolute;

  left: -8px;
  top: 0px;

  width: 69px;
  min-height: 38px;

  text-align: right;
`

type OriginContextType = {
  ref: React.Ref<HTMLElement | null>
} | null

const OriginContext = React.createContext<OriginContextType>(null)

type PointProps = {
  children: React.ReactElement
}

function Point(props: PointProps) {
  const contextValue = React.useContext(OriginContext)
  return React.cloneElement(props.children, contextValue ? {ref: contextValue.ref} : undefined)
}

type OriginProps = {
  className?: string
  label?: React.ReactNode
  children: React.ReactNode
  variant?: DirectionVariant
}

export function Origin({className, label, children, variant}: OriginProps) {
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
      observer.observe(ref.current, {
        childList: true,
        characterData: true,
        subtree: true
      })
      return () => observer.disconnect()
    }
    return
  }, [])

  // Basic math: To get the center of the pointRef element we just:
  const offsetY = (pointRect && rect && pointRect.top - rect.top + pointRect.height / 2) || 0

  const centered = variant === 'centered'

  return (
    <OriginRoot className={className} label={label}>
      <OriginIcon label={label} size={rect ? rect.height : 46}>
        <OriginIconContent>
          <OriginRoad height={rect ? rect.height : 46} offsetY={offsetY} centered={centered} />
          <OriginPoint offsetY={offsetY} centered={centered} />
        </OriginIconContent>
      </OriginIcon>
      {label && <AsideLabel>{label}</AsideLabel>}
      <div ref={ref}>
        <OriginContext.Provider value={{ref: pointRef}}>{children}</OriginContext.Provider>
      </div>
    </OriginRoot>
  )
}

Origin.Point = Point
