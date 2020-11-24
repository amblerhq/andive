import React from 'react'
import styled, {css} from 'styled-components'

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

const OriginPoint = styled(({offsetY, ...props}) => <div {...props} />)`
  position: absolute;

  width: 8px;
  height: 8px;

  left: calc(50% - 4px);
  top: ${props => (props.offsetY ? props.offsetY - 4 : 4)}px;

  border-radius: 50%;

  border: 2px solid ${palette.darkPrimary};
  background: white;
`
const OriginRoad = styled(({offsetY, height, ...props}) => <div {...props} />)`
  position: absolute;

  left: calc(50% - 2px);
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

const AsideLabel = styled(({offsetY, ...props}) => <div {...props} />)`
  position: absolute;
  top: ${props => (props.offsetY ? props.offsetY - 20 : -8)}px;
  left: 0;

  width: 69px;
  min-height: 38px;

  padding: 8px;

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
}

export function Origin({className, label, children}: OriginProps) {
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

  return (
    <OriginRoot className={className} label={label}>
      <OriginIcon label={label} size={rect ? rect.height : 46}>
        <OriginIconContent>
          <OriginRoad height={rect ? rect.height : 46} offsetY={offsetY} />
          <OriginPoint offsetY={offsetY} />
        </OriginIconContent>
      </OriginIcon>
      {label && <AsideLabel offsetY={offsetY}>{label}</AsideLabel>}
      <div ref={ref}>
        <OriginContext.Provider value={{ref: pointRef}}>{children}</OriginContext.Provider>
      </div>
    </OriginRoot>
  )
}

Origin.Point = Point
