import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import * as palette from '../constants/palette'
import {ZIndexes} from '../constants/enum'

function stickyAppBar({sticky, scrollable, stickyHeight, fade}) {
  if (sticky || scrollable) {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      min-height: ${stickyHeight}px;

      z-index: ${ZIndexes.FIXED};

      box-shadow: 0 ${2}px ${5}px 0 ${palette.hexToRGBA(palette.darkGrey, fade * 0.2)};
    `
  }
}

const AppBar = styled.div`
  min-height: ${props => (props.stickyHeight ? props.stickyHeight + props.baseHeight : props.baseHeight)}px;
  width: 100%;

  background-color: #fff;

  border-bottom: 1px solid #eee;

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
  const [fade, setFade] = useState(0)

  const childArray = React.Children.toArray(children)
  const baseChild = childArray.find(child => child.type !== Sticky)
  const stickyChild = childArray.find(child => child.type === Sticky)

  const stickyHeight = stickyChild ? stickyChild.props.height : 0

  useScrollEffect(() => {
    if (stickyChild) {
      setSticky(window.scrollY > height)
    }

    if (stickyChild && !stickyChild.props.fadeOffset) {
      setFade(fadeOffset)
    } else {
      const fadeOffsetReference = (stickyChild && stickyChild.props.fadeOffset) || fadeOffset
      const origin = scrollable ? 0 : height
      setFade(sticky || scrollable ? Math.min((window.scrollY - origin) / fadeOffsetReference, 1) : 0)
    }
  })

  return (
    <>
      {(scrollable || sticky) && <AppBarFootprint baseHeight={height} stickyHeight={stickyHeight || 0} />}
      <AppBar
        sticky={sticky}
        scrollable={scrollable}
        fade={fade}
        baseHeight={height}
        stickyHeight={stickyHeight}
        {...props}
      >
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
