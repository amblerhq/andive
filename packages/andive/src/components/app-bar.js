import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import {ZIndexes} from '../constants/enum'

function stickyAppBar({sticky, scrollable, stickyHeight}) {
  if (sticky || scrollable) {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      min-height: ${stickyHeight}px;

      z-index: ${ZIndexes.FIXED};

      border-bottom: 1px solid #ddd;
    `
  }
}

const AppBar = styled.div`
  min-height: ${props => (props.stickyHeight ? props.stickyHeight + props.baseHeight : props.baseHeight)}px;
  width: 100%;

  background-color: #fff;

  border-bottom: 1px solid #ddd;

  ${stickyAppBar}
`

const AppBarFootprint = styled.div`
  height: ${props => props.baseHeight + props.stickyHeight}px;
`

function useScrollEffect(effect, deps) {
  useEffect(() => {
    effect()
    window.addEventListener('scroll', effect)
    return () => {
      window.removeEventListener('scroll', effect)
    }
  }, deps)
}

// To avoid passing unwanted props to the DOM we filter `fadeOffset` and `height` here.
function Sticky({children, height, fadeOffset, ...props}) {
  return React.cloneElement(children, props)
}

Sticky.propTypes = {
  height: PropTypes.number,
  fadeOffset: PropTypes.number
}

export function AppBarComponent({children, fadeOffset = 1, height = 64, scrollable = false, ...props}) {
  const [sticky, setSticky] = useState(false)

  const childArray = React.Children.toArray(children)
  const baseChild = childArray.find(child => child.type !== Sticky)
  const stickyChild = childArray.find(child => child.type === Sticky)

  const stickyHeight = stickyChild ? stickyChild.props.height : 0

  useScrollEffect(() => {
    if (stickyChild) {
      setSticky(window.scrollY > height)
    }
  })

  return (
    <>
      {(scrollable || sticky) && <AppBarFootprint baseHeight={height} stickyHeight={stickyHeight || 0} />}
      <AppBar sticky={sticky} scrollable={scrollable} baseHeight={height} stickyHeight={stickyHeight} {...props}>
        {!sticky && baseChild}
        {stickyChild}
      </AppBar>
    </>
  )
}

AppBarComponent.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  fadeOffset: PropTypes.number,
  scrollable: PropTypes.bool
}

AppBarComponent.Sticky = Sticky

export default AppBarComponent
