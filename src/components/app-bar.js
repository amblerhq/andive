import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import {darkGreyAlpha} from '../constants/palette'
import {ZIndexes} from '../constants/enum'

function stickyAppBar({sticky, stickyHeight, fade}) {
  if (!sticky) {
    return ''
  }

  return css`
    position: fixed;
    top: 0;
    left: 0;
    min-height: ${stickyHeight}px;

    z-index: ${ZIndexes.FIXED};

    box-shadow: 0 ${2}px ${5}px 0 ${darkGreyAlpha(fade * 0.2)};
  `
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
// eslint-disable-next-line
function Sticky({children, height, fadeOffset, ...props}) {
  return React.cloneElement(children, props)
}

Sticky.propTypes = {
  height: PropTypes.number.isRequired,
  fadeOffset: PropTypes.number
}

export function AppBarComponent({children, height = 64, ...props}) {
  const [sticky, setSticky] = useState(false)
  const [fade, setFade] = useState(0)

  const childArray = React.Children.toArray(children)
  const baseChild = childArray.find(child => child.type !== Sticky)
  const stickyChild = childArray.find(child => child.type === Sticky)

  const stickyHeight = stickyChild ? stickyChild.props.height : 0

  useScrollEffect(() => {
    if (stickyChild) {
      const isSticky = window.scrollY > height
      setSticky(isSticky)

      if (!stickyChild.props.fadeOffset) {
        setFade(1)
      } else {
        setFade(isSticky ? Math.min((window.scrollY - height) / stickyChild.props.fadeOffset, 1) : 0)
      }
    }
  })

  return (
    <>
      {sticky && <AppBarFootprint baseHeight={height} stickyHeight={stickyHeight} />}
      <AppBar sticky={sticky} fade={fade} baseHeight={height} stickyHeight={stickyHeight} {...props}>
        {!sticky && baseChild}
        {stickyChild}
      </AppBar>
    </>
  )
}

AppBarComponent.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number.isRequired
}

AppBarComponent.Sticky = Sticky

export default AppBarComponent
